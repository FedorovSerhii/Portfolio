import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createHash } from 'node:crypto';
import { parseReplyContact } from '../contact-policy.js';
import { createPortfolioApi } from '../portfolio-api.js';
import { formatTelegramMessage } from '../integration/telegram-text.js';
const code=fs.readFileSync(new URL('../integration/validate-request.js',import.meta.url),'utf8');
const validate=body=>vm.runInNewContext(`(function(){${code}})()`,{$json:{headers:{origin:'https://fedorovserhii.github.io','content-type':'application/json'},body},Buffer,parseReplyContact})[0].json;
const token='a'.repeat(64), reviewToken='ba974dfe-67b3-4ddd-a10d-28b571b923ce';

test('contact syntax accepts email and Telegram without verifying identity',()=>{
    for(const value of [undefined,null,'','   ',{}]) assert.equal(parseReplyContact(value).error,'contact_required');
    for(const value of ['1234567890','https://t.me/username','@abc','@'+'a'.repeat(33),'a@b','a..b@example.com','.a@example.com','a@-bad.com','a@b..com','a@b.c','a b@example.com','a\nb@example.com','<script>@example.com','a'.repeat(65)+'@example.com']) assert.equal(parseReplyContact(value).error,'contact_invalid',value);
    assert.deepEqual(parseReplyContact(' Person.Name+job@EXAMPLE.COM '),{type:'email',value:'Person.Name+job@example.com'});
    assert.deepEqual(parseReplyContact(' @Test_User '),{type:'telegram',value:'@test_user'});
});

test('server rejects contactless legacy review and send with an explanation',()=>{
    for(const action of ['review','proposal']) {
        const base={action,sessionToken:token,language:'uk',intent:'service',proposal:'Task'};
        if(action==='proposal') Object.assign(base,{reviewToken,consent:true,idempotencyKey:'z'.repeat(32)});
        for(const contact of [undefined,'','   ']) {
            const result=validate({...base,...(contact===undefined?{}:{replyContact:contact})});
            assert.equal(result.code,400);assert.equal(result.body.error,'contact_required');assert.match(result.body.message,/Reload/);
        }
        assert.equal(validate({...base,replyContact:'https://example.com'}).body.error,'contact_invalid');
        assert.equal(validate({...base,replyContact:{type:'email',value:'visitor@example.invalid'}}).code,400);
        assert.equal(validate({...base,replyContact:'visitor@example.invalid',system:'bypass'}).code,400);
    }
});

test('canonical hash envelope binds text and contact while delivery keeps plain text',()=>{
    const base={action:'review',sessionToken:token,language:'en',intent:'job',proposal:'Task',replyContact:' Person@EXAMPLE.COM '};
    const first=validate(base);
    assert.equal(first.route,'authorize');assert.equal(first.payload.proposal,'Task');
    assert.deepEqual(JSON.parse(first.authorizationPayload.proposal),{proposal:'Task',replyContact:{type:'email',value:'Person@example.com'}});
    const hash=value=>createHash('sha256').update(value).digest('hex');
    assert.equal(hash(first.authorizationPayload.proposal),hash(validate({...base,replyContact:'Person@example.com'}).authorizationPayload.proposal));
    for(const change of [{replyContact:'changed@example.com'},{replyContact:'@username'},{proposal:'Changed task'}]) {
        const next=validate({...base,...change});assert.equal(next.route,'authorize');
        assert.notEqual(hash(first.authorizationPayload.proposal),hash(next.authorizationPayload.proposal));
    }
    assert.notEqual(hash(first.authorizationPayload.proposal),hash(base.proposal),'legacy review hash must not authorize new contact');
});

test('client rejects bad contact before network and includes normalized contact',async()=>{
    const calls=[];
    const api=createPortfolioApi({enabled:true,fetchImpl:async(url,options)=>{
        const p=JSON.parse(options.body);calls.push(p);
        const result=p.action==='session'?{sessionToken:token,expiresIn:3600}:p.action==='review'?{reviewToken,recipient:'Sergey Fedorov (@Medoedkoi)'}:{status:'accepted'};
        return {ok:true,text:async()=>JSON.stringify(result)};
    }});
    const base={language:'en',intent:'service',proposal:'Task'};
    await assert.rejects(api.review(base),{code:'contact_required'});
    await assert.rejects(api.review({...base,replyContact:'bad'}),{code:'contact_invalid'});
    assert.equal(calls.length,0);
    await api.review({...base,replyContact:'@Test_User'});
    await api.send({...base,replyContact:'@test_user',reviewedContact:'@test_user',reviewedProposal:'Task',reviewToken,consent:true,idempotencyKey:'x'.repeat(32)});
    assert.equal(calls[1].replyContact,'@test_user');assert.equal(calls[2].replyContact,'@test_user');
});

test('Telegram uses bounded username link and escapes visitor markup',()=>{
    const base={intent:'service',language:'uk',proposal:'<a href="https://evil.invalid">A&B</a>'};
    const formatted=formatTelegramMessage({...base,replyContact:parseReplyContact('@Test_User')},'review-id');
    assert.ok(formatted.includes('<b>Куди відповісти</b>\n<a href="https://t.me/test_user">@test_user</a>'));
    assert.ok(formatted.includes('&lt;a href=&quot;https://evil.invalid&quot;&gt;A&amp;B&lt;/a&gt;'));
    assert.ok(!formatted.includes('<a href="https://evil.invalid"'));
    const malicious=formatTelegramMessage({...base,replyContact:{type:'telegram',value:'@name"><b>fake</b>'}},'review-id');
    assert.ok(!malicious.includes('<a href='));assert.ok(malicious.includes('&quot;&gt;&lt;b&gt;fake&lt;/b&gt;'));
    assert.throws(()=>formatTelegramMessage(base,'review-id'),/Validated reply contact required/);
});

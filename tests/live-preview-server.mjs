import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(fileURLToPath(new URL('..',import.meta.url)));
const port=Number(process.env.PORTFOLIO_PREVIEW_PORT || 8766);
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.md':'text/plain; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const server=http.createServer(async(req,res)=>{
    const url=new URL(req.url,`http://127.0.0.1:${port}`);
    if(url.pathname==='/mock-api' && req.method==='POST') {
        let body='';for await(const chunk of req){body+=chunk;if(body.length>12000){res.writeHead(413).end();return;}}
        let p;try{p=JSON.parse(body);}catch{res.writeHead(400).end();return;}
        const replies={en:'LOCAL TEST: Sergey describes backup verification, Grafana monitoring, Linux, Docker and automation services.',uk:'ЛОКАЛЬНИЙ ТЕСТ: Сергій описує перевірку резервних копій, моніторинг Grafana, Linux, Docker та автоматизацію.',ru:'ЛОКАЛЬНЫЙ ТЕСТ: Сергей описывает проверку резервных копий, мониторинг Grafana, Linux, Docker и автоматизацию.',pl:'TEST LOKALNY: Sergey opisuje weryfikację kopii zapasowych, monitoring Grafana, Linux, Docker i automatyzację.'};
        const answer=p.action==='session'?{sessionToken:'a'.repeat(64),expiresIn:3600}:p.action==='chat'?{reply:replies[p.language]||replies.en}:p.action==='review'?{reviewToken:'ba974dfe-67b3-4ddd-a10d-28b571b923ce',expiresIn:600,recipient:'Sergey Fedorov (@Medoedkoi)'}:{status:'accepted'};
        res.writeHead(200,{'Content-Type':'application/json','Cache-Control':'no-store'}).end(JSON.stringify(answer));return;
    }
    if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405).end();return;}
    const local=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
    if(!local.startsWith(root+path.sep) || local.includes(path.sep+'.git'+path.sep)){res.writeHead(403).end();return;}
    try {
        let bytes=await fs.readFile(local);
        if(local.endsWith(path.sep+'portfolio-api.js')) bytes=Buffer.from(bytes.toString('utf8').replace('https://n8n.e-kontent.space/webhook/portfolio-agent-v1',`http://127.0.0.1:${port}/mock-api`).replace('LIVE_ASSISTANT_ENABLED = false','LIVE_ASSISTANT_ENABLED = true'));
        if(local.endsWith(path.sep+'index.html')) bytes=Buffer.from(bytes.toString('utf8').replace('<body>','<body><div style="position:sticky;top:0;z-index:10000;background:#fff2b3;color:#111;padding:8px;text-align:center;font:600 14px system-ui">LOCAL TEST PREVIEW · mocked replies · no external sending</div>'));
        res.writeHead(200,{'Content-Type':mime[path.extname(local)]||'application/octet-stream','Cache-Control':'no-store'}).end(req.method==='HEAD'?undefined:bytes);
    } catch {res.writeHead(404).end();}
});
server.listen(port,'127.0.0.1',()=>console.log(`Local mocked preview http://127.0.0.1:${port}`));
process.on('SIGINT',()=>server.close(()=>process.exit(0)));

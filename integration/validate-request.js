// Executed by n8n before database, model or Telegram nodes.
const request = $json;
const fail = (code, error) => [{ json: { route: 'respond', code, body: { error, ...(['contact_required', 'contact_invalid'].includes(error) ? { message: 'A valid reply email or Telegram @username is required. Reload the page, add your contact, and review the request again.' } : {}) } } }];
const origin = request.headers?.origin;
if (origin !== 'https://fedorovserhii.github.io') return fail(403, 'origin_denied');
if (!/^application\/json(?:;|$)/i.test(request.headers?.['content-type'] || '')) return fail(415, 'invalid_input');
const p = request.body;
if (!p || typeof p !== 'object' || Array.isArray(p)) return fail(400, 'invalid_input');
if (Buffer.byteLength(JSON.stringify(p), 'utf8') > 8192) return fail(413, 'invalid_input');
const keys = {
  session: ['action'],
  chat: ['action', 'sessionToken', 'language', 'message', 'history'],
  review: ['action', 'sessionToken', 'language', 'intent', 'proposal', 'replyContact'],
  proposal: ['action', 'sessionToken', 'language', 'intent', 'proposal', 'replyContact', 'reviewToken', 'consent', 'idempotencyKey'],
};
if (!Object.hasOwn(keys, p.action) || Object.keys(p).some(k => !keys[p.action].includes(k))) return fail(400, 'invalid_input');
const text = (s, max) => typeof s === 'string' && s.trim().length > 0 && s.length <= max;
const contact = s => /[^\s@]+@[^\s@]+\.[^\s@]+|(?:\+?\d[\s().-]*){7,}|(?:^|\s)@[\p{L}\p{N}_]{3,}/u.test(s);
if (p.action !== 'session' && (!/^[a-f0-9]{64}$/.test(p.sessionToken || '') || !['en', 'ru', 'uk', 'pl'].includes(p.language))) return fail(400, 'invalid_input');
if (p.action === 'chat') {
  if (!text(p.message, 600) || contact(p.message) || !Array.isArray(p.history) || p.history.length > 12) return fail(400, 'invalid_input');
  if (p.history.some(e => !e || Object.keys(e).some(k => !['role', 'content'].includes(k)) || !['user', 'assistant'].includes(e.role) || !text(e.content, e.role === 'user' ? 600 : 4000) || (e.role === 'user' && contact(e.content)))) return fail(400, 'invalid_input');
}
if (['review', 'proposal'].includes(p.action) && (!text(p.proposal, 1200) || !['job', 'service'].includes(p.intent))) return fail(400, 'invalid_input');
let replyContact;
if (['review', 'proposal'].includes(p.action)) {
  replyContact = parseReplyContact(p.replyContact);
  if (replyContact.error) return fail(400, replyContact.error);
}
if (p.action === 'proposal' && (p.consent !== true || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(p.reviewToken || '') || !/^[A-Za-z0-9_-]{16,128}$/.test(p.idempotencyKey || ''))) return fail(400, 'invalid_input');
const payload = replyContact ? { ...p, replyContact } : p;
// The existing database hashes proposal. Bind a canonical envelope including the
// contact without storing contact plaintext or changing the database schema.
const authorizationPayload = replyContact ? { ...p, proposal: JSON.stringify({ proposal: p.proposal, replyContact }) } : p;
return [{ json: { route: 'authorize', payload, authorizationPayload } }];

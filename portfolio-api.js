import { ASSISTANT_LIMITS } from './assistant-policy.js';
import { parseReplyContact } from './contact-policy.js?v=contact-20261019';

// Public, bounded Portfolio API. This is not an n8n administration API or secret.
export const PORTFOLIO_API_URL = 'https://n8n.e-kontent.space/webhook/portfolio-agent-v1';
export const LIVE_ASSISTANT_ENABLED = true;

export class PortfolioApiError extends Error {
    constructor(code) { super(code); this.name = 'PortfolioApiError'; this.code = code; }
}

export function createPortfolioApi({ enabled = LIVE_ASSISTANT_ENABLED, fetchImpl = globalThis.fetch } = {}) {
    let session = null;
    let sessionPromise = null;
    async function post(payload) {
        if (!enabled) throw new PortfolioApiError('disabled');
        const body = JSON.stringify(payload);
        if (new TextEncoder().encode(body).length > 8192) throw new PortfolioApiError('invalid_input');
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 25000);
        try {
            const response = await fetchImpl(PORTFOLIO_API_URL, {
                method: 'POST', mode: 'cors', credentials: 'omit', redirect: 'error',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body, signal: controller.signal,
            });
            const raw = await response.text();
            if (raw.length > 12000) throw new PortfolioApiError('unavailable');
            let result;
            try { result = JSON.parse(raw); } catch { throw new PortfolioApiError('unavailable'); }
            if (!response.ok) {
                const known = ['session_expired', 'rate_limited', 'busy', 'review_mismatch', 'review_expired', 'already_submitted', 'delivery_uncertain', 'invalid_input', 'unavailable', 'contact_required', 'contact_invalid'];
                const code = known.includes(result?.error) ? result.error : 'unavailable';
                if (code === 'session_expired') session = null;
                throw new PortfolioApiError(code);
            }
            return result;
        } catch (error) {
            if (error instanceof PortfolioApiError) throw error;
            throw new PortfolioApiError(payload.action === 'proposal' ? 'delivery_uncertain' : 'unavailable');
        } finally { clearTimeout(timeout); }
    }
    async function getSession() {
        if (session && session.expiresAt > Date.now()) return session.token;
        if (!sessionPromise) sessionPromise = post({ action: 'session' }).then(result => {
            if (!/^[a-f0-9]{64}$/.test(result?.sessionToken || '') || result.expiresIn !== 3600) throw new PortfolioApiError('unavailable');
            session = { token: result.sessionToken, expiresAt: Date.now() + 3500000 };
            return session.token;
        }).finally(() => { sessionPromise = null; });
        return sessionPromise;
    }
    const checked = (language, proposal, intent, replyContact) => {
        if (!['en', 'ru', 'uk', 'pl'].includes(language) || !['job', 'service'].includes(intent) || typeof proposal !== 'string' || !proposal.trim() || proposal.length > ASSISTANT_LIMITS.proposal) throw new PortfolioApiError('invalid_input');
        const contact = parseReplyContact(replyContact);
        if (contact.error) throw new PortfolioApiError(contact.error);
        return contact.value;
    };
    return Object.freeze({
        async chat({ message, language, history = [] }) {
            if (typeof message !== 'string' || !message.trim() || message.length > ASSISTANT_LIMITS.message || !['en', 'ru', 'uk', 'pl'].includes(language)) throw new PortfolioApiError('invalid_input');
            const safeHistory = history.slice(-ASSISTANT_LIMITS.history).map(e => ({ role: e.role, content: e.content }));
            // Reduce old conversation before sending so public text stays within the byte limit.
            const token = await getSession();
            const payload = { action: 'chat', sessionToken: token, language, message, history: safeHistory };
            while (safeHistory.length && new TextEncoder().encode(JSON.stringify(payload)).length > 8192) safeHistory.shift();
            const result = await post(payload);
            if (typeof result?.reply !== 'string' || !result.reply.trim() || result.reply.length > 4000) throw new PortfolioApiError('unavailable');
            return result.reply;
        },
        async review({ proposal, replyContact, language, intent }) {
            replyContact = checked(language, proposal, intent, replyContact);
            const result = await post({ action: 'review', sessionToken: await getSession(), language, intent, proposal, replyContact });
            if (!/^[0-9a-f-]{36}$/i.test(result?.reviewToken || '') || result?.recipient !== 'Sergey Fedorov (@Medoedkoi)') throw new PortfolioApiError('unavailable');
            return result;
        },
        async send({ proposal, replyContact, reviewedProposal, reviewedContact, reviewToken, consent, idempotencyKey, language, intent }) {
            const canonicalContact = checked(language, proposal, intent, replyContact);
            if (proposal !== reviewedProposal || replyContact !== reviewedContact || consent !== true || !/^[0-9a-f-]{36}$/i.test(reviewToken || '') || !/^[A-Za-z0-9_-]{16,128}$/.test(idempotencyKey || '')) throw new PortfolioApiError('review_mismatch');
            let result;
            try {
                result = await post({ action: 'proposal', sessionToken: await getSession(), proposal, replyContact: canonicalContact, reviewToken, consent: true, idempotencyKey, language, intent });
            } catch (error) {
                // An unreadable upstream failure may happen after Telegram accepted delivery.
                if (error.code === 'unavailable') throw new PortfolioApiError('delivery_uncertain');
                throw error;
            }
            if (result?.status !== 'accepted') throw new PortfolioApiError('delivery_uncertain');
            return result;
        },
    });
}

import { ASSISTANT_LIMITS, containsContactDetails } from './assistant-policy.js';

// These paths refer to a future authenticated server relay, never directly to n8n.
// The static demo does not import or call this adapter.
export const DEFAULT_N8N_CONFIG = Object.freeze({
    enabled: false,
    assistantPath: '/api/assistant',
    proposalPath: '/api/proposals'
});

export class RelayError extends Error {
    constructor(code, message) {
        super(message);
        this.name = 'RelayError';
        this.code = code;
    }
}

export function createN8nAdapter(config = {}, fetchImpl = globalThis.fetch) {
    const settings = { ...DEFAULT_N8N_CONFIG, ...config };
    const assertEnabled = () => {
        if (settings.enabled !== true) throw new RelayError('disabled', 'The live relay is disabled.');
    };
    const validateInput = (input) => {
        if (!input || typeof input !== 'object' || Array.isArray(input)) {
            throw new RelayError('invalid-input', 'The request must be an object.');
        }
    };
    const validateText = (value, max, allowPublicReply = false) => {
        if (typeof value !== 'string' || !value.trim() || value.length > max || (!allowPublicReply && containsContactDetails(value))) {
            throw new RelayError('invalid-input', 'Use a bounded text message without contact details.');
        }
    };
    const validateLanguage = (language) => {
        if (!['en', 'ru', 'uk', 'pl'].includes(language)) throw new RelayError('invalid-input', 'Unsupported language.');
    };
    const relayUrl = (path) => {
        try {
            // The browser's origin always wins; config.origin supports server-side tests.
            const origin = new URL(globalThis.location?.origin || settings.origin);
            if (globalThis.location?.origin && settings.origin && new URL(settings.origin).origin !== origin.origin) throw new Error();
            const url = new URL(path, origin);
            const localHost = ['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname) || origin.hostname.endsWith('.localhost');
            const secureOrigin = origin.protocol === 'https:' || (origin.protocol === 'http:' && localHost);
            if (!secureOrigin || url.origin !== origin.origin || url.username || url.password || url.hash) throw new Error();
            return url;
        } catch {
            throw new RelayError('invalid-config', 'The relay must use same-origin HTTPS, or HTTP on localhost.');
        }
    };
    const request = async (path, payload) => {
        const url = relayUrl(path);
        if (typeof fetchImpl !== 'function') throw new RelayError('invalid-config', 'Fetch is unavailable.');
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);
        try {
            const response = await fetchImpl(url.href, {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                redirect: 'error',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal
            });
            if (!response.ok) throw new RelayError('request-failed', 'The relay did not accept the request.');
            return await response.json();
        } catch (error) {
            if (error instanceof RelayError) throw error;
            throw new RelayError('request-failed', 'The relay request failed.');
        } finally {
            clearTimeout(timeout);
        }
    };

    return Object.freeze({
        async sendMessage(input = {}) {
            // This guard deliberately precedes parsing, validation and fetch.
            assertEnabled();
            validateInput(input);
            const { message, language = 'en', history = [] } = input;
            validateText(message, ASSISTANT_LIMITS.message);
            validateLanguage(language);
            if (!Array.isArray(history) || history.length > ASSISTANT_LIMITS.history) throw new RelayError('invalid-input', 'History exceeds the limit.');
            const safeHistory = history.map((entry) => {
                if (!entry || !['user', 'assistant'].includes(entry.role)) throw new RelayError('invalid-input', 'Invalid history role.');
                validateText(entry.content, entry.role === 'user' ? ASSISTANT_LIMITS.message : 4000, entry.role === 'assistant');
                return { role: entry.role, content: entry.content };
            });
            const result = await request(settings.assistantPath, { message, language, history: safeHistory });
            if (!result || typeof result.reply !== 'string' || !result.reply.trim() || result.reply.length > 4000) throw new RelayError('invalid-response', 'Invalid relay reply.');
            return { reply: result.reply };
        },
        async forwardOffer(input = {}) {
            assertEnabled();
            validateInput(input);
            const { proposal, reviewedProposal, consent, language = 'en', idempotencyKey } = input;
            validateText(proposal, ASSISTANT_LIMITS.proposal);
            validateLanguage(language);
            if (consent !== true) throw new RelayError('consent-required', 'Explicit consent is required.');
            if (reviewedProposal !== proposal) throw new RelayError('review-mismatch', 'The current proposal must match the reviewed text.');
            if (typeof idempotencyKey !== 'string' || !/^[A-Za-z0-9_-]{16,128}$/.test(idempotencyKey)) throw new RelayError('invalid-input', 'A bounded idempotency key is required.');
            const result = await request(settings.proposalPath, { proposal, reviewedProposal, consent: true, language, idempotencyKey });
            if (!result || result.status !== 'accepted') throw new RelayError('invalid-response', 'Invalid relay acknowledgement.');
            return { status: 'accepted' };
        }
    });
}

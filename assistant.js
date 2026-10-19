import { buildPublicProfile, getLanguage } from './portfolio-data.js';
import { getAdditions } from './additions-translations.js?v=live-20261019';
import { renderServiceCards } from './portfolio-content.js?v=live-20261019';
import { ASSISTANT_LIMITS, classifyMessage, containsContactDetails } from './assistant-policy.js';
import { createPortfolioApi, LIVE_ASSISTANT_ENABLED } from './portfolio-api.js?v=live-20261019';

export { ASSISTANT_LIMITS } from './assistant-policy.js';

// A persistent DOM instance keeps drafts, selection and focus across language changes.
// Live transport is enabled only after the bounded server workflow is verified.
export function createAssistant(initialLanguage = 'en') {
    const live = LIVE_ASSISTANT_ENABLED;
    const api = createPortfolioApi();
    const state = {
        language: getLanguage(initialLanguage),
        intent: 'overview',
        history: [],
        feedback: '',
        offerFeedback: 'reviewRequired',
        reviewedProposal: null,
        consent: false,
        motionEnabled: true,
        hasWalked: false,
        chatBusy: false,
        offerBusy: false,
        reviewVersion: 0,
        reviewToken: null,
        reviewLanguage: null,
        idempotencyKey: null,
        deliveryState: 'idle'
    };
    const element = document.createElement('section');
    element.id = 'assistant-section';
    element.innerHTML = `
        <h1 id="section-title"></h1>
        <p id="assistant-demo-note" class="demo-note"></p>
        <p id="assistant-privacy-note" class="muted"></p>
        <div class="assistant-layout">
            <div class="assistant-panel">
                <label for="assistant-intent" id="assistant-intent-label"></label>
                <select id="assistant-intent"><option value="overview"></option><option value="job"></option><option value="service"></option></select>
                <p id="assistant-intent-note"></p>
                <p id="assistant-greeting"></p>
                <div class="assistant-shortcuts" role="group" aria-labelledby="assistant-shortcuts-label">
                    <p id="assistant-shortcuts-label"></p>
                    <button type="button" data-topic="profile"></button>
                    <button type="button" data-topic="skills"></button>
                    <button type="button" data-topic="services"></button>
                    <button type="button" data-topic="contacts"></button>
                    <button type="button" data-topic="limits"></button>
                </div>
                <ol id="assistant-history" role="log" aria-live="polite" aria-relevant="additions text" tabindex="0"></ol>
                <form id="assistant-form" novalidate>
                    <label for="assistant-message" id="assistant-input-label"></label>
                    <p id="assistant-input-hint" class="muted"></p>
                    <textarea id="assistant-message" rows="3" maxlength="${ASSISTANT_LIMITS.message}" aria-describedby="assistant-input-hint assistant-feedback" autocomplete="off"></textarea>
                    <div class="assistant-controls">
                        <button type="submit" id="assistant-submit"></button>
                        <button type="button" id="assistant-clear" class="secondary-button"></button>
                    </div>
                    <p id="assistant-feedback" role="status" aria-live="polite"></p>
                </form>
                <section id="offer-section" aria-labelledby="offer-title" hidden>
                    <h2 id="offer-title"></h2>
                    <p id="offer-hint" class="muted"></p>
                    <label for="offer-proposal" id="offer-proposal-label"></label>
                    <textarea id="offer-proposal" rows="4" maxlength="${ASSISTANT_LIMITS.proposal}" aria-describedby="offer-hint offer-feedback" autocomplete="off"></textarea>
                    <button type="button" id="offer-review"></button>
                    <div id="offer-preview" hidden>
                        <h3 id="offer-preview-title"></h3>
                        <p id="offer-preview-text" class="offer-preview-text"></p>
                    </div>
                    <label class="consent-label" for="offer-consent">
                        <input type="checkbox" id="offer-consent" disabled aria-describedby="offer-nothing-sent">
                        <span id="offer-consent-label"></span>
                    </label>
                    <button type="button" id="offer-send" disabled aria-disabled="true" aria-describedby="offer-nothing-sent"></button>
                    <p id="offer-nothing-sent" class="demo-note"></p>
                    <p id="offer-feedback" role="status" aria-live="polite"></p>
                </section>
                <section id="assistant-service-details" aria-labelledby="assistant-service-title" hidden>
                    <h2 id="assistant-service-title"></h2>
                    <p id="assistant-service-terms"></p>
                    <div id="assistant-service-cards"></div>
                </section>
                <div class="assistant-reference-links"><a href="#profile" id="assistant-profile-link"></a><a href="#services" id="assistant-services-link"></a></div>
            </div>
            <aside class="mascot-panel" aria-labelledby="mascot-title">
                <h2 id="mascot-title"></h2>
                <div class="mascot-stage">
                    <div id="assistant-mascot" class="mascot-character" role="img">
                        <svg viewBox="0 0 120 130" width="120" height="130" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="60" cy="117" rx="37" ry="7" fill="#bdd8e0"/>
                            <path d="M45 99v14h-14M75 99v14h14" fill="none" stroke="#244755" stroke-width="7" stroke-linecap="round"/>
                            <path d="M23 60l-12 13M97 60l12 13" fill="none" stroke="#244755" stroke-width="7" stroke-linecap="round"/>
                            <path d="M60 19V9" stroke="#244755" stroke-width="5"/>
                            <circle cx="60" cy="8" r="6" fill="#f8bb53"/>
                            <rect x="22" y="20" width="76" height="80" rx="17" fill="#e3f5f5" stroke="#244755" stroke-width="4"/>
                            <rect x="32" y="31" width="56" height="34" rx="10" fill="#244755"/>
                            <circle cx="46" cy="47" r="5" fill="#8be4cc"/><circle cx="74" cy="47" r="5" fill="#8be4cc"/>
                            <path d="M50 57q10 7 20 0" fill="none" stroke="#8be4cc" stroke-width="3" stroke-linecap="round"/>
                            <path d="M37 77h31M37 87h31" stroke="#83b8bc" stroke-width="4" stroke-linecap="round"/>
                            <circle cx="81" cy="77" r="4" fill="#f8bb53"/><circle cx="81" cy="87" r="4" fill="#48a18a"/>
                        </svg>
                    </div>
                </div>
                <button type="button" id="mascot-jump"></button>
                <button type="button" id="mascot-motion-toggle" class="secondary-button" aria-pressed="true"></button>
                <p id="mascot-motion-note" class="muted"></p>
            </aside>
        </div>`;

    const find = (id) => element.querySelector(`#${id}`);
    const message = find('assistant-message');
    const history = find('assistant-history');
    const proposal = find('offer-proposal');
    const consent = find('offer-consent');
    const mascot = find('assistant-mascot');
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const text = () => getAdditions(state.language);

    function getReply(topic) {
        const profile = buildPublicProfile(state.language);
        const labels = text();
        switch (topic) {
            case 'profile':
                return `${profile.name} — ${profile.role}.\n${profile.summary}`;
            case 'skills':
                return profile.skills.map((skill) => `${skill.title}: ${skill.description}`).join('\n\n');
            case 'services':
                return `${profile.serviceTerms}\n\n${profile.services.map((service) => `${service.title}\n${labels.oneTime}: ${service.oneTime}\n${labels.monthly}: ${service.monthly}`).join('\n\n')}`;
            case 'contacts':
                return `Email: ${profile.contacts.email}\nTelegram: ${profile.contacts.telegram.username} (${profile.contacts.telegram.url})\nLinkedIn: ${profile.contacts.linkedin.url}`;
            case 'job':
                return labels.assistant.jobReply;
            case 'experience':
                return labels.assistant.experienceReply;
            case 'limits':
                return labels.assistant.limitsReply;
            default:
                return labels.assistant.unsupported;
        }
    }

    function renderHistory(scroll = false) {
        const fragment = document.createDocumentFragment();
        for (const entry of state.history) {
            const item = document.createElement('li');
            item.dataset.role = entry.role;
            const label = document.createElement('strong');
            label.textContent = entry.role === 'user' ? text().assistant.visitorName : text().assistant.assistantName;
            const body = document.createElement('p');
            // Visitor strings are never interpolated into HTML or parsed as markup.
            body.textContent = entry.role === 'assistant'
                ? entry.message || getReply(entry.topic)
                : entry.topic ? text().assistant.shortcuts[entry.topic] : entry.message;
            item.append(label, body);
            fragment.append(item);
        }
        history.replaceChildren(fragment);
        if (scroll) history.scrollTop = history.scrollHeight;
    }

    function renderFeedback() {
        find('assistant-feedback').textContent = text().assistant[state.feedback] || '';
        find('offer-feedback').textContent = text().assistant[state.offerFeedback] || '';
        renderControls();
    }

    function renderControls() {
        find('assistant-submit').disabled = state.chatBusy;
        find('assistant-clear').disabled = state.chatBusy || state.offerBusy;
        element.querySelectorAll('[data-topic]').forEach(button => { button.disabled = state.chatBusy; });
        find('offer-review').disabled = state.offerBusy || state.deliveryState !== 'idle';
        proposal.disabled = state.deliveryState === 'sending';
        consent.disabled = state.offerBusy || state.reviewedProposal === null || state.deliveryState !== 'idle';
        const canSend = live && !state.offerBusy && state.deliveryState === 'idle' && state.consent &&
            state.reviewToken && state.reviewLanguage === state.language && state.reviewedProposal === proposal.value;
        find('offer-send').disabled = !canSend;
        find('offer-send').setAttribute('aria-disabled', String(!canSend));
    }

    function addExchange(userEntry, topic) {
        state.history.push({ role: 'user', ...userEntry }, { role: 'assistant', topic });
        state.history = state.history.slice(-ASSISTANT_LIMITS.history);
        state.feedback = '';
        message.removeAttribute('aria-invalid');
        renderHistory(true);
        renderFeedback();
    }

    function invalidateReview(feedback = 'consentReset') {
        state.reviewVersion++;
        state.reviewToken = null;
        state.reviewLanguage = null;
        state.idempotencyKey = null;
        if (state.deliveryState !== 'sending') state.deliveryState = 'idle';
        state.reviewedProposal = null;
        state.consent = false;
        state.offerFeedback = feedback;
        consent.checked = false;
        consent.disabled = true;
        find('offer-preview').hidden = true;
        find('offer-preview-text').textContent = '';
        renderFeedback();
    }

    function renderIntent() {
        find('assistant-intent').value = state.intent;
        find('offer-section').hidden = live ? !['job', 'service'].includes(state.intent) : state.intent !== 'job';
        find('assistant-service-details').hidden = state.intent !== 'service';
        find('assistant-intent-note').textContent = state.intent === 'job'
            ? text().assistant.jobReply
            : state.intent === 'service' ? text().assistant.serviceReply : '';
        find('assistant-intent-note').hidden = state.intent === 'overview';
    }

    function setIntent(intent = 'overview') {
        const nextIntent = ['overview', 'job', 'service'].includes(intent) ? intent : 'overview';
        if (state.intent !== nextIntent) {
            invalidateReview(state.reviewedProposal !== null || state.consent ? 'consentReset' : 'reviewRequired');
            state.intent = nextIntent;
        }
        renderIntent();
    }

    function canMove() {
        return state.motionEnabled && !motionPreference.matches;
    }

    function renderMotion() {
        const labels = text().mascot;
        const enabled = canMove();
        find('mascot-jump').disabled = !enabled;
        const toggle = find('mascot-motion-toggle');
        toggle.disabled = motionPreference.matches;
        toggle.setAttribute('aria-pressed', String(enabled));
        toggle.textContent = `${labels.motion}: ${enabled ? labels.on : labels.off}`;
        find('mascot-motion-note').textContent = motionPreference.matches ? labels.reduced : '';
        if (!enabled) mascot.classList.remove('is-walking', 'is-jumping');
    }

    function walk() {
        if (!canMove()) return;
        state.hasWalked = true;
        mascot.classList.remove('is-jumping', 'is-walking');
        void mascot.offsetWidth;
        mascot.classList.add('is-walking');
    }

    function setLanguage(language) {
        if (live && getLanguage(language) !== state.language && state.reviewedProposal !== null) invalidateReview();
        state.language = getLanguage(language);
        const labels = text();
        const ui = labels.assistant;
        const mappings = {
            'section-title': ui.title,
            'assistant-demo-note': ui.demoNote,
            'assistant-privacy-note': ui.privacyNote,
            'assistant-intent-label': ui.intentLabel,
            'assistant-greeting': ui.greeting,
            'assistant-shortcuts-label': ui.shortcutsLabel,
            'assistant-input-label': ui.inputLabel,
            'assistant-input-hint': ui.inputHint,
            'assistant-submit': ui.submit,
            'assistant-clear': ui.clear,
            'offer-title': ui.offerTitle,
            'offer-hint': ui.offerHint,
            'offer-proposal-label': ui.proposalLabel,
            'offer-review': ui.review,
            'offer-preview-title': ui.previewTitle,
            'offer-consent-label': ui.consent,
            'offer-send': ui.send,
            'offer-nothing-sent': ui.nothingSent,
            'assistant-service-title': labels.services,
            'assistant-service-terms': buildPublicProfile(state.language).serviceTerms,
            'assistant-profile-link': labels.profile,
            'assistant-services-link': labels.services,
            'mascot-title': labels.mascot.title,
            'mascot-jump': labels.mascot.jump
        };
        for (const [id, value] of Object.entries(mappings)) find(id).textContent = value;
        find('assistant-intent').querySelectorAll('option').forEach((option) => { option.textContent = ui.intents[option.value]; });
        element.querySelectorAll('[data-topic]').forEach((button) => { button.textContent = ui.shortcuts[button.dataset.topic]; });
        history.setAttribute('aria-label', ui.historyLabel);
        mascot.setAttribute('aria-label', labels.mascot.description);
        find('assistant-service-cards').innerHTML = renderServiceCards(state.language);
        renderHistory();
        renderFeedback();
        renderIntent();
        renderMotion();
    }

    async function submitLiveMessage(value, topic) {
        if (state.chatBusy) return;
        const language = state.language;
        const previous = state.history.map(entry => ({ role: entry.role, content: entry.message || (entry.role === 'assistant' ? getReply(entry.topic) : text().assistant.shortcuts[entry.topic]) }));
        state.chatBusy = true;
        state.feedback = 'thinking';
        state.history.push({ role: 'user', message: value });
        state.history = state.history.slice(-ASSISTANT_LIMITS.history);
        renderHistory(true);
        renderFeedback();
        try {
            const reply = topic === 'limits' ? text().assistant.limitsReply : await api.chat({ message: value, language, history: previous });
            state.history.push({ role: 'assistant', message: reply });
            state.history = state.history.slice(-ASSISTANT_LIMITS.history);
            state.feedback = '';
        } catch (error) { state.feedback = error.code || 'unavailable'; }
        finally { state.chatBusy = false; renderHistory(true); renderFeedback(); }
    }

    find('assistant-form').addEventListener('submit', (event) => {
        event.preventDefault();
        if (state.chatBusy) return;
        const value = message.value.trim();
        const error = !value ? 'empty'
            : message.value.length > ASSISTANT_LIMITS.message ? 'long'
            : containsContactDetails(value) ? 'contact' : null;
        if (error) {
            state.feedback = error;
            message.setAttribute('aria-invalid', 'true');
            renderFeedback();
            return;
        }
        if (live) void submitLiveMessage(value);
        else addExchange({ message: value }, classifyMessage(value));
        message.value = '';
    });
    message.addEventListener('input', () => {
        if (!state.chatBusy) state.feedback = '';
        message.removeAttribute('aria-invalid');
        renderFeedback();
    });
    element.querySelectorAll('[data-topic]').forEach((button) => {
        button.addEventListener('click', () => {
            if (live) void submitLiveMessage(text().assistant.shortcuts[button.dataset.topic], button.dataset.topic);
            else addExchange({ topic: button.dataset.topic }, button.dataset.topic);
        });
    });
    find('assistant-clear').addEventListener('click', () => {
        state.history = [];
        message.value = '';
        proposal.value = '';
        message.removeAttribute('aria-invalid');
        proposal.removeAttribute('aria-invalid');
        invalidateReview('reviewRequired');
        state.feedback = 'cleared';
        renderHistory();
        renderFeedback();
    });
    find('assistant-intent').addEventListener('change', (event) => setIntent(event.target.value));
    proposal.addEventListener('input', () => {
        proposal.removeAttribute('aria-invalid');
        invalidateReview();
    });
    find('offer-review').addEventListener('click', async () => {
        if (state.offerBusy || state.deliveryState !== 'idle') return;
        const value = proposal.value.trim();
        const error = !value ? 'proposalEmpty'
            : proposal.value.length > ASSISTANT_LIMITS.proposal ? 'proposalLong'
            : !live && containsContactDetails(value) ? 'contact' : null;
        if (error) {
            invalidateReview(error);
            proposal.setAttribute('aria-invalid', 'true');
            return;
        }
        if (live) {
            invalidateReview('reviewing');
            const version = state.reviewVersion;
            const snapshot = { proposal: proposal.value, language: state.language, intent: state.intent };
            state.offerBusy = true;
            renderControls();
            try {
                const review = await api.review(snapshot);
                if (version !== state.reviewVersion || snapshot.proposal !== proposal.value || snapshot.language !== state.language || snapshot.intent !== state.intent) return;
                state.reviewToken = review.reviewToken;
                state.reviewLanguage = snapshot.language;
                state.idempotencyKey = crypto.randomUUID();
            } catch (error) {
                if (version === state.reviewVersion) state.offerFeedback = error.code || 'unavailable';
                return;
            } finally { state.offerBusy = false; renderFeedback(); }
            if (!state.reviewToken) return;
        }
        state.reviewedProposal = proposal.value;
        state.consent = false;
        state.offerFeedback = 'reviewed';
        consent.checked = false;
        consent.disabled = false;
        proposal.removeAttribute('aria-invalid');
        find('offer-preview-text').textContent = state.reviewedProposal;
        find('offer-preview').hidden = false;
        renderFeedback();
    });
    find('offer-send').addEventListener('click', async () => {
        if (!live || state.offerBusy || !state.consent || !state.reviewToken || state.deliveryState !== 'idle' || state.reviewedProposal !== proposal.value || state.reviewLanguage !== state.language) return;
        state.offerBusy = true;
        state.deliveryState = 'sending';
        state.offerFeedback = 'sending';
        renderFeedback();
        try {
            await api.send({ proposal: proposal.value, reviewedProposal: state.reviewedProposal, reviewToken: state.reviewToken, consent: true,
                idempotencyKey: state.idempotencyKey, language: state.language, intent: state.intent });
            state.deliveryState = 'sent';
            state.offerFeedback = 'delivered';
        } catch (error) {
            state.deliveryState = ['review_expired', 'review_mismatch', 'session_expired', 'rate_limited'].includes(error.code) ? 'idle' : 'uncertain';
            state.offerFeedback = error.code || 'delivery_uncertain';
        } finally {
            state.offerBusy = false;
            state.consent = false;
            consent.checked = false;
            state.reviewToken = null;
            renderFeedback();
        }
    });
    consent.addEventListener('change', () => {
        if (state.reviewedProposal === null || state.reviewedProposal !== proposal.value) {
            invalidateReview();
            return;
        }
        state.consent = consent.checked;
        state.offerFeedback = state.consent ? 'consentGiven' : 'consentRemoved';
        renderFeedback();
    });
    find('mascot-jump').addEventListener('click', () => {
        // Guard in JavaScript as well as CSS, including programmatic activation.
        if (!canMove()) return;
        mascot.classList.remove('is-walking', 'is-jumping');
        void mascot.offsetWidth;
        mascot.classList.add('is-jumping');
    });
    find('mascot-motion-toggle').addEventListener('click', () => {
        if (motionPreference.matches) return;
        state.motionEnabled = !state.motionEnabled;
        renderMotion();
        if (canMove()) walk();
    });
    mascot.addEventListener('animationend', () => mascot.classList.remove('is-walking', 'is-jumping'));
    motionPreference.addEventListener('change', renderMotion);
    setLanguage(state.language);

    return {
        element,
        setLanguage,
        setIntent,
        onMount() {
            renderMotion();
            if (!state.hasWalked) walk();
        }
    };
}

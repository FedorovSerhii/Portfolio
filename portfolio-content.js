import { buildPublicProfile } from './portfolio-data.js';
import { getAdditions } from './additions-translations.js?v=live-20261019';
import { getLandingTranslations } from './landing-translations.js?v=live-20261019';

export function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function outboundIcon() {
    return '<svg class="outbound-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg>';
}

export function renderActions(language) {
    const text = getAdditions(language);
    return `<div class="portfolio-actions" aria-label="${escapeHtml(text.actions)}">
        <a class="action-link" href="#contacts/service" data-contact-intent="service"><span>${escapeHtml(text.serviceCta)}</span><span aria-hidden="true">→</span></a>
        <a class="action-link" href="#contacts/job" data-contact-intent="job"><span>${escapeHtml(text.jobCta)}</span><span aria-hidden="true">→</span></a>
    </div>`;
}

export function renderHomepage(language) {
    const profile = buildPublicProfile(language);
    const text = getLandingTranslations(language);
    const aiSkills = profile.skills.filter((skill) => ['n8n', 'chatgpt-codex', 'models', 'agents'].includes(skill.id));
    const nameParts = profile.name.split(' ');
    return `<div class="landing-page">
        <section class="landing-hero" id="landing-hero" aria-labelledby="section-title">
            <div class="hero-identity">
                <h1 id="section-title">${nameParts.map((part) => `<span>${escapeHtml(part)}</span>`).join(' ')}</h1>
                <p class="hero-role">${escapeHtml(text.heroKicker)}</p>
            </div>
            <div class="hero-copy">
                <p class="hero-statement">${escapeHtml(text.heroTitle)}</p>
                <p class="hero-intro">${escapeHtml(text.heroIntro)}</p>
                ${renderActions(language)}
            </div>
        </section>
        ${renderAvailability(language)}
        <section class="landing-section services-section" id="landing-services" aria-labelledby="landing-services-title">
            <div class="section-heading"><h2 id="landing-services-title">${escapeHtml(text.serviceTitle)}</h2><p>${escapeHtml(text.serviceIntro)}</p></div>
            <div class="service-overview">${profile.services.map((service) => `<article class="service-overview-row" data-service="${service.id}">
                <h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.oneTime)}</p>
            </article>`).join('')}
                <a class="text-link section-link" href="#services">${escapeHtml(text.scopeLink)} <span aria-hidden="true">→</span></a>
            </div>
        </section>
        <section class="landing-section background-section" aria-labelledby="background-title">
            <div class="background-copy"><h2 id="background-title">${escapeHtml(text.backgroundTitle)}</h2><p>${escapeHtml(text.backgroundIntro)}</p>
                <div class="inline-links"><a class="text-link" href="#experience">${escapeHtml(text.experienceLink)} <span aria-hidden="true">→</span></a><a class="text-link" href="#projects">${escapeHtml(text.projectsLink)} <span aria-hidden="true">→</span></a></div>
            </div>
            <div class="automation-note"><h3>${escapeHtml(text.aiTitle)}</h3>
                <p>${escapeHtml(aiSkills.find((skill) => skill.id === 'n8n').description)} ${escapeHtml(aiSkills.find((skill) => skill.id === 'chatgpt-codex').description)}</p>
                <div class="inline-links"><a class="text-link" href="#technologies">${escapeHtml(text.technologiesLink)} <span aria-hidden="true">→</span></a><a class="text-link" href="#profile">${escapeHtml(text.profileLink)} <span aria-hidden="true">→</span></a></div>
            </div>
        </section>
        <section class="landing-section landing-contact" aria-labelledby="landing-contact-title">
            <div><h2 id="landing-contact-title">${escapeHtml(text.closingTitle)}</h2><p>${escapeHtml(text.closingIntro)}</p></div>
            <div class="personal-address"><a class="address-email" href="mailto:${escapeHtml(profile.contacts.email)}">${escapeHtml(profile.contacts.email)}</a>
                <div class="inline-links"><a class="text-link" href="${escapeHtml(profile.contacts.telegram.url)}" target="_blank" rel="noopener noreferrer">Telegram ${outboundIcon()}</a><a class="text-link" href="${escapeHtml(profile.contacts.linkedin.url)}" target="_blank" rel="noopener noreferrer">LinkedIn ${outboundIcon()}</a></div>
            </div>
        </section>
        <p class="demo-exploration"><a href="#assistant">${escapeHtml(text.demoLink)}</a><span>${escapeHtml(text.demoNote)}</span></p>
    </div>`;
}

export function renderContacts(language, requestedIntent = 'overview') {
    const intent = ['job', 'service'].includes(requestedIntent) ? requestedIntent : 'overview';
    const profile = buildPublicProfile(language);
    const labels = getAdditions(language);
    const landing = getLandingTranslations(language);
    const text = landing.contacts;
    const title = intent === 'job' ? labels.jobCta : intent === 'service' ? labels.serviceCta : text.overviewTitle;
    const intro = text[`${intent}Intro`];
    const email = `mailto:${profile.contacts.email}${intent === 'overview' ? '' : `?subject=${encodeURIComponent(text[`${intent}Subject`])}&body=${encodeURIComponent(text[`${intent}Body`])}`}`;
    const nextSteps = intent === 'overview'
        ? `<p>${escapeHtml(text.overviewNext)}</p>`
        : `<ul class="contact-checklist">${text[`${intent}Next`].map((step) => `<li>${escapeHtml(step)}</li>`).join('')}</ul>`;
    return `<section id="contact-section" data-intent="${intent}">
        <div class="page-intro"><p class="eyebrow">${escapeHtml(text.kicker)}</p><h1>${escapeHtml(title)}</h1><p class="page-lead">${escapeHtml(intro)}</p></div>
        <nav class="contact-topic-navigation" aria-label="${escapeHtml(text.optionsLabel)}">
            <a href="#contacts"${intent === 'overview' ? ' aria-current="page"' : ''}>${escapeHtml(text.all)}</a>
            <a href="#contacts/service" data-contact-intent="service"${intent === 'service' ? ' aria-current="page"' : ''}>${escapeHtml(labels.serviceCta)}</a>
            <a href="#contacts/job" data-contact-intent="job"${intent === 'job' ? ' aria-current="page"' : ''}>${escapeHtml(labels.jobCta)}</a>
        </nav>
        <div class="contact-methods">
            <a id="contact-email" class="contact-method" href="${escapeHtml(email)}"><span class="contact-channel">Email</span><span class="contact-address"><strong>${escapeHtml(profile.contacts.email)}</strong><span>${escapeHtml(text.emailHint)}</span></span>${outboundIcon()}</a>
            <a id="contact-telegram" class="contact-method" href="${escapeHtml(profile.contacts.telegram.url)}" target="_blank" rel="noopener noreferrer"><span class="contact-channel">Telegram</span><span class="contact-address"><strong>${escapeHtml(profile.contacts.telegram.username)}</strong><span>${escapeHtml(text.telegramHint)}</span></span>${outboundIcon()}</a>
            <a id="contact-linkedin" class="contact-method" href="${escapeHtml(profile.contacts.linkedin.url)}" target="_blank" rel="noopener noreferrer"><span class="contact-channel">LinkedIn</span><span class="contact-address"><strong>${escapeHtml(profile.contacts.linkedin.label)}</strong><span>${escapeHtml(text.linkedinHint)}</span></span>${outboundIcon()}</a>
        </div>
        <p class="contact-mail-note">${escapeHtml(text.mailNote)}</p>
        <div class="contact-context"><section><h2>${escapeHtml(text.nextTitle)}</h2>${nextSteps}</section>
            <section><h2>${escapeHtml(text.contextTitle)}</h2><div class="stacked-links">
                <a class="text-link" href="#services">${escapeHtml(landing.scopeLink)} <span aria-hidden="true">→</span></a>
                <a class="text-link" href="#experience">${escapeHtml(landing.experienceLink)} <span aria-hidden="true">→</span></a>
                <a class="text-link" href="#profile">${escapeHtml(landing.profileLink)} <span aria-hidden="true">→</span></a>
            </div></section>
        </div>
        <p class="demo-exploration"><a href="#assistant${intent === 'overview' ? '' : `/${intent}`}"${intent === 'overview' ? '' : ` data-assistant-intent="${intent}"`}>${escapeHtml(intent === 'job' ? text.demoJob : intent === 'service' ? text.demoService : landing.demoLink)}</a><span>${escapeHtml(landing.demoNote)}</span></p>
    </section>`;
}

export function renderAvailability(language) {
    const profile = buildPublicProfile(language);
    if (!profile.availability?.length) return '';
    return `<section class="availability" aria-label="${escapeHtml(getAdditions(language).availability)}">${profile.availability.map((entry) => `<p data-availability="${entry.type}" data-status="${entry.status}">${escapeHtml(entry.label)}</p>`).join('')}</section>`;
}

export function renderAddedSkills(language) {
    const profile = buildPublicProfile(language);
    return `<section class="added-skills"><h2>${escapeHtml(getAdditions(language).aiTools)}</h2>${renderSkillList(profile.skills.filter((skill) => ['n8n', 'chatgpt-codex', 'models', 'agents'].includes(skill.id)))}</section>`;
}

function renderSkillList(skills) {
    return `<ul class="skill-list">${skills.map((skill) => `<li data-skill="${skill.id}"><strong>${escapeHtml(skill.title)}</strong><p>${escapeHtml(skill.description)}</p></li>`).join('')}</ul>`;
}

export function renderServiceCards(language, headingLevel = 3) {
    const profile = buildPublicProfile(language);
    const text = getAdditions(language);
    return `<div class="service-cards">${profile.services.map((service) => `<article class="service-card" data-service="${service.id}">
        <h${headingLevel}>${escapeHtml(service.title)}</h${headingLevel}>
        <dl><div><dt>${escapeHtml(text.oneTime)}</dt><dd>${escapeHtml(service.oneTime)}</dd></div>
        <div><dt>${escapeHtml(text.monthly)}</dt><dd>${escapeHtml(service.monthly)}</dd></div></dl>
    </article>`).join('')}</div>`;
}

export function renderServices(language) {
    const text = getAdditions(language);
    return `<h1>${escapeHtml(text.services)}</h1><p>${escapeHtml(buildPublicProfile(language).serviceTerms)}</p>
        ${renderServiceCards(language, 2)}${renderActions(language)}`;
}

export function renderProfile(language) {
    const profile = buildPublicProfile(language);
    const text = getAdditions(language);
    return `<h1>${escapeHtml(text.profile)}</h1>
        <section class="profile-summary"><h2>${escapeHtml(profile.name)}</h2>
            <p><strong>${escapeHtml(profile.role)}</strong></p><p>${escapeHtml(profile.summary)}</p>
            <p><a href="${escapeHtml(profile.url)}">${escapeHtml(profile.url)}</a></p>
        </section>
        ${renderAvailability(language)}
        <h2>${escapeHtml(text.skills)}</h2>${renderSkillList(profile.skills)}
        <h2>${escapeHtml(text.services)}</h2><p>${escapeHtml(profile.serviceTerms)}</p>${renderServiceCards(language)}
        <h2>${escapeHtml(text.contacts)}</h2>
        <ul class="public-contacts">
            <li>Email: <a href="mailto:${escapeHtml(profile.contacts.email)}">${escapeHtml(profile.contacts.email)}</a></li>
            <li>Telegram: <a href="${escapeHtml(profile.contacts.telegram.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(profile.contacts.telegram.username)}</a></li>
            <li>LinkedIn: <a href="${escapeHtml(profile.contacts.linkedin.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(profile.contacts.linkedin.label)}</a></li>
        </ul>
        <h2>${escapeHtml(text.profileFiles)}</h2><p>${escapeHtml(text.profileNote)}</p>
        <ul class="profile-file-links"><li><a href="profile.json">profile.json</a></li><li><a href="profile.md">profile.md</a></li><li><a href="llms.txt">llms.txt</a></li></ul>
        ${renderActions(language)}`;
}

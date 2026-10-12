const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');

const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8765/';
const baseline = process.argv.includes('--baseline');
const routes = ['welcome', 'experience', 'technologies', 'technologies/familiar', 'technologies/proficient', 'projects', 'contacts', 'education'];
if (!baseline) routes.push('services', 'profile', 'assistant', 'assistant/job', 'assistant/service', 'contacts/job', 'contacts/service');
const locales = ['en', 'ru', 'uk', 'pl'];
const errors = [];
let checks = 0;
let nonce = 0;

async function ready(page, route, locale) {
    const [section, sub] = route.split('/');
    const subsection = section === 'technologies' ? sub || 'proficient' : null;
    await page.waitForFunction(({ section, subsection, locale, intent }) => {
        const main = document.querySelector('main');
        const heading = main?.querySelector('h1');
        const active = document.querySelector('.menu-button[aria-current]');
        const activeSub = document.querySelector('.submenu-button[aria-current]');
        return document.documentElement.lang === locale && heading?.id === 'section-title' &&
            active?.dataset.section === section &&
            (subsection ? activeSub?.dataset.subsection === subsection : !activeSub) &&
            (section !== 'assistant' || document.querySelector('#assistant-intent')?.value === intent) &&
            (section !== 'contacts' || document.querySelector('#contact-section')?.dataset.intent === intent);
    }, { section, subsection, locale, intent: sub || 'overview' });
}

(async () => {
    const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
    try {
        for (const locale of locales) {
            const context = await browser.newContext();
            await context.addInitScript((lang) => localStorage.setItem('preferredLanguage', lang), locale);
            const page = await context.newPage();
            page.on('pageerror', (error) => errors.push(error.message));
            page.on('response', (response) => {
                if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
            });
            for (const viewport of [{ width: 1440, height: 900 }, { width: 320, height: 740 }]) {
                await page.setViewportSize(viewport);
                for (const route of routes) {
                    // A different query creates a fresh document for initial-focus checks.
                    await page.goto(`${base}?nav_check=${++nonce}#${route}`);
                    await ready(page, route, locale);
                    const result = await page.evaluate(() => {
                        const main = document.querySelector('main');
                        const heading = main.querySelector('h1');
                        const refs = [...document.querySelectorAll('[aria-labelledby], [aria-controls]')].flatMap((element) =>
                            ['aria-labelledby', 'aria-controls'].flatMap((attribute) =>
                                (element.getAttribute(attribute) || '').split(/\s+/).filter(Boolean).map((id) => ({
                                    id,
                                    count: [...document.querySelectorAll('[id]')].filter((target) => target.id === id).length,
                                    text: attribute === 'aria-labelledby' ? document.getElementById(id)?.textContent.trim() : true
                                }))));
                        return {
                            heading: heading.textContent.trim(),
                            headings: main.querySelectorAll('h1').length,
                            label: main.getAttribute('aria-labelledby'),
                            landmark: main.getAttribute('role'),
                            focused: document.activeElement.id,
                            refs,
                            horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
                            clippedLinks: [...document.querySelectorAll('.menu-button, .submenu-button')]
                                .filter((link) => link.getBoundingClientRect().height > 0)
                                .filter((link) => link.scrollHeight > link.clientHeight || link.getBoundingClientRect().height < 44)
                                .map((link) => link.textContent),
                            placeholderContacts: /\+00000000000|instagram\.com\/placeholder|vk\.com\/placeholder|facebook\.com\/placeholder/.test(main.textContent),
                            expanded: document.querySelector('[data-section="technologies"]').getAttribute('aria-expanded'),
                            submenuHidden: document.querySelector('#technologies-menu').hidden
                        };
                    });
                    const label = `${locale}, ${viewport.width}px, #${route}`;
                    assert.equal(result.headings, 1, `${label}: exactly one h1`);
                    assert.ok(result.heading, `${label}: nonempty heading`);
                    assert.equal(result.label, 'section-title', `${label}: main accessible name`);
                    assert.equal(result.landmark, null, `${label}: native main landmark`);
                    assert.notEqual(result.focused, 'main-content', `${label}: initial focus is preserved`);
                    for (const ref of result.refs) {
                        assert.equal(ref.count, 1, `${label}: ${ref.id} resolves exactly once`);
                        assert.ok(ref.text, `${label}: ${ref.id} supplies a name`);
                    }
                    assert.equal(result.horizontalOverflow, false, `${label}: horizontal overflow`);
                    assert.deepEqual(result.clippedLinks, [], `${label}: navigation labels fit`);
                    assert.equal(result.placeholderContacts, false, `${label}: no placeholder contacts`);
                    assert.equal(result.expanded, route.startsWith('technologies') ? 'true' : 'false', `${label}: expanded state`);
                    assert.equal(result.submenuHidden, !route.startsWith('technologies'), `${label}: submenu visibility`);
                    if (locale === 'uk' && route === 'education') assert.equal(result.heading, 'Освіта');
                    checks++;
                }
            }

            await page.goto(`${base}?nav_check=${++nonce}#welcome`);
            await ready(page, 'welcome', locale);
            await page.locator('.menu-button[data-section="experience"]').focus();
            await page.keyboard.press('Enter');
            await ready(page, 'experience', locale);
            assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
            await page.locator('.menu-button[data-section="projects"]').click();
            await ready(page, 'projects', locale);
            await page.locator('.menu-button[data-section="education"]').click();
            await ready(page, 'education', locale);
            await page.goBack();
            await ready(page, 'projects', locale);
            await page.goForward();
            await ready(page, 'education', locale);
            await page.locator('.menu-button[data-section="education"]').focus();
            await page.keyboard.press('Enter');
            assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
            await page.locator('.menu-button[data-section="technologies"]').click();
            await ready(page, 'technologies', locale);
            await page.locator('[data-subsection="familiar"]').focus();
            await page.keyboard.press('Enter');
            await ready(page, 'technologies/familiar', locale);
            assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
            if (!baseline) {
                await page.goto(`${base}?nav_check=${++nonce}#welcome`);
                await ready(page, 'welcome', locale);
                await page.locator('[data-contact-intent="job"]').first().focus();
                await page.keyboard.press('Enter');
                await ready(page, 'contacts/job', locale);
                assert.equal(await page.locator('#contact-email').isVisible(), true);
                assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
                await page.goBack();
                await ready(page, 'welcome', locale);
                await page.goForward();
                await ready(page, 'contacts/job', locale);
                await page.locator('.menu-button[data-section="services"]').click();
                await ready(page, 'services', locale);
                await page.locator('[data-contact-intent="service"]').first().focus();
                await page.keyboard.press('Enter');
                await ready(page, 'contacts/service', locale);
                assert.equal(await page.locator('#contact-telegram').isVisible(), true);
                await page.goBack();
                await ready(page, 'services', locale);
                await page.goForward();
                await ready(page, 'contacts/service', locale);

                await page.locator('.menu-button[data-section="profile"]').click();
                await ready(page, 'profile', locale);
                const profile = await page.evaluate(async (lang) => {
                    const { buildPublicProfile, buildPersonJsonLd } = await import('./portfolio-data.js');
                    const data = buildPublicProfile(lang);
                    const visible = document.querySelector('main').textContent;
                    return {
                        missing: [data.name, data.role, data.summary, data.contacts.email, data.contacts.telegram.username,
                            ...data.skills.flatMap((skill) => [skill.title, skill.description]),
                            ...data.services.flatMap((service) => [service.title, service.oneTime, service.monthly]), data.serviceTerms]
                            .filter((text) => !visible.includes(text)),
                        jsonLd: JSON.parse(document.querySelector('#profile-jsonld').textContent),
                        expectedJsonLd: buildPersonJsonLd(undefined, lang),
                        availability: document.querySelectorAll('[data-availability]').length
                    };
                }, locale);
                assert.deepEqual(profile.missing, [], `${locale}: all exported public facts are visible`);
                assert.deepEqual(profile.jsonLd, profile.expectedJsonLd, `${locale}: localized Person matches canonical facts`);
                assert.equal(profile.availability, 0);
            }
            await context.close();
            console.log(`PASS ${locale}: headings, direct links, initial focus, mobile layout, keyboard and history`);
        }

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(`${base}?nav_check=${++nonce}#technologies/familiar`);
        await ready(page, 'technologies/familiar', 'en');
        for (const locale of ['ru', 'uk', 'pl', 'en']) {
            await page.locator('#language-select').focus();
            await page.selectOption('#language-select', locale);
            await ready(page, 'technologies/familiar', locale);
            assert.equal(await page.evaluate(() => document.activeElement.id), 'language-select');
            assert.equal(await page.evaluate(() => location.hash), '#technologies/familiar');
            await page.reload();
            await ready(page, 'technologies/familiar', locale);
            assert.equal(await page.locator('#language-select').inputValue(), locale);
        }
        const popupPromise = context.waitForEvent('page');
        await page.locator('.menu-button[data-section="projects"]').click({ modifiers: ['Control'] });
        const popup = await popupPromise;
        await ready(popup, 'projects', 'en');
        assert.equal(await page.evaluate(() => location.hash), '#technologies/familiar');
        await popup.close();
        for (const route of ['unknown', 'projects/extra', 'technologies/unknown', 'technologies/familiar/extra', 'assistant/unknown', 'assistant/', 'assistant/job/extra', 'contacts/unknown', 'contacts/', 'contacts/service/extra']) {
            await page.goto(`${base}?nav_check=${++nonce}#${route}`);
            await ready(page, 'welcome', 'en');
        }
        await context.close();

        const privacy = await browser.newContext();
        await privacy.addInitScript(() => {
            Storage.prototype.getItem = () => { throw new Error('Storage disabled'); };
            Storage.prototype.setItem = () => { throw new Error('Storage disabled'); };
        });
        const privacyPage = await privacy.newPage();
        await privacyPage.goto(`${base}?nav_check=${++nonce}#education`);
        await ready(privacyPage, 'education', 'en');
        await privacyPage.selectOption('#language-select', 'uk');
        await ready(privacyPage, 'education', 'uk');
        await privacy.close();
        assert.deepEqual(errors, []);
        console.log(`PASS ${checks} language/viewport/route cases; language persistence, new tabs, invalid routes and blocked storage`);
    } finally {
        await browser.close();
    }
})().catch((error) => { console.error(error); process.exit(1); });

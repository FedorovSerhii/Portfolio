const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');

const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8765/';
const languages = ['en', 'ru', 'uk', 'pl'];

async function ready(page, language, intent) {
    await page.waitForFunction(({ language, intent }) => document.documentElement.lang === language &&
        document.querySelector('#contact-section')?.dataset.intent === intent, { language, intent });
}

(async () => {
    const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
    const errors = [];
    try {
        for (const language of languages) {
            const context = await browser.newContext({ viewport: { width: 320, height: 740 }, reducedMotion: 'reduce' });
            const page = await context.newPage();
            await page.addInitScript((lang) => localStorage.setItem('preferredLanguage', lang), language);
            page.on('pageerror', (error) => errors.push(error.message));
            await page.goto(`${base}?conversion=${language}#welcome`);
            await page.waitForFunction((lang) => document.documentElement.lang === lang && document.querySelector('[data-contact-intent]'), language);
            const home = await page.evaluate(() => ({
                text: document.querySelector('main').textContent,
                headingTop: document.querySelector('main h1').getBoundingClientRect().top,
                heroActionBottom: Math.max(...[...document.querySelectorAll('#landing-hero .portfolio-actions a')].map((link) => link.getBoundingClientRect().bottom)),
                actions: [...document.querySelectorAll('main .portfolio-actions a')].map((link) => ({ href: link.getAttribute('href'), disabled: link.getAttribute('aria-disabled') })),
                overflow: document.documentElement.scrollWidth > innerWidth,
                status: document.querySelectorAll('[data-availability]').length
            }));
            assert.ok(home.headingTop < 740, `${language}: heading is reachable on first mobile screen`);
            assert.ok(home.heroActionBottom <= 740, `${language}: both contact choices fit on the first mobile screen`);
            assert.equal(home.overflow, false);
            assert.equal(home.status, 0);
            assert.doesNotMatch(home.text, /20\s*%|50\+?\s*(?:servers|сервер|serwer)|8\+?\s*(?:years|лет|років|lat)|24\s*\/\s*7/iu);
            assert.ok(home.actions.some((link) => link.href === '#contacts/job'));
            assert.ok(home.actions.some((link) => link.href === '#contacts/service'));
            assert.ok(home.actions.every((link) => !link.href.startsWith('#assistant') && link.disabled !== 'true'));

            const sent = [];
            page.on('request', (request) => { if (request.method() !== 'GET') sent.push(request.url()); });
            for (const intent of ['job', 'service']) {
                await page.locator(`[data-contact-intent="${intent}"]`).first().focus();
                await page.keyboard.press('Enter');
                await ready(page, language, intent);
                assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
                const email = new URL(await page.locator('#contact-email').getAttribute('href'));
                assert.equal(email.protocol, 'mailto:');
                assert.equal(decodeURIComponent(email.pathname), 'carport-chime6r@icloud.com');
                assert.ok(email.searchParams.get('subject')?.trim());
                assert.ok(email.searchParams.get('body')?.trim());
                assert.equal(await page.locator('#contact-telegram').getAttribute('href'), 'https://t.me/Medoedkoi');
                assert.equal(await page.locator('#contact-linkedin').getAttribute('href'), 'https://linkedin.com/in/serhii-fedorov-14b077205');
                assert.equal(await page.locator('#contact-section input, #contact-section textarea, #contact-section form').count(), 0);
                const nextLanguage = languages[(languages.indexOf(language) + 1) % languages.length];
                await page.locator('#language-select').focus();
                await page.selectOption('#language-select', nextLanguage);
                await ready(page, nextLanguage, intent);
                assert.equal(await page.evaluate(() => document.activeElement.id), 'language-select');
                assert.equal(await page.evaluate(() => location.hash), `#contacts/${intent}`);
                await page.selectOption('#language-select', language);
                await ready(page, language, intent);
                await page.goBack();
                await page.waitForFunction(() => location.hash === '#welcome' && document.querySelector('main [data-contact-intent]'));
            }
            assert.deepEqual(sent, [], `${language}: visiting a contact page never sends a message`);
            const skip = page.locator('a[href="#main-content"]');
            if (await skip.count()) {
                await skip.focus();
                await page.keyboard.press('Enter');
                assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
                assert.equal(await page.evaluate(() => location.hash), '#welcome');
            }
            await context.close();
            console.log(`PASS ${language}: mobile first screen, direct job/service contact, safe mail draft, unchanged contacts, locale intent/focus and no automatic sends`);
        }
        assert.deepEqual(errors, []);
    } finally {
        await browser.close();
    }
})().catch((error) => { console.error(error); process.exit(1); });

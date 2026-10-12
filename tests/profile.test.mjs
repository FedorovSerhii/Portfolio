import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { portfolioData, buildPublicProfile, buildPersonJsonLd, getConfirmedAvailability } from '../portfolio-data.js';
import { getAdditions } from '../additions-translations.js';
import { getLandingTranslations } from '../landing-translations.js';

const languages = ['en', 'ru', 'uk', 'pl'];
const contacts = {
    email: 'carport-chime6r@icloud.com',
    telegram: { username: 'Medoedkoi', url: 'https://t.me/Medoedkoi' },
    linkedin: { label: 'serhii-fedorov', url: 'https://linkedin.com/in/serhii-fedorov-14b077205' }
};

function leafPaths(value, prefix = '') {
    return Object.entries(value).flatMap(([key, entry]) => typeof entry === 'string'
        ? [`${prefix}${key}`]
        : leafPaths(entry, `${prefix}${key}.`));
}

test('public identity and existing contact values are preserved in all languages', () => {
    assert.equal(buildPublicProfile('en').name, 'Sergey Fedorov');
    assert.equal(buildPublicProfile('ru').name, 'Сергей Фёдоров');
    assert.equal(buildPublicProfile('uk').name, 'Сергій Федоров');
    for (const language of languages) {
        const profile = buildPublicProfile(language);
        assert.deepEqual(profile.contacts, contacts);
        assert.ok(profile.name && profile.role && profile.summary);
        for (const key of ['employers', 'yearsOfExperience', 'certifications', 'results', 'price', 'availability']) {
            assert.equal(Object.hasOwn(profile, key), false);
        }
    }
});

test('all requested skills and services have complete four-language descriptions', () => {
    for (const language of languages) {
        const profile = buildPublicProfile(language);
        for (const id of ['n8n', 'chatgpt-codex', 'models', 'agents']) {
            const skill = profile.skills.find((entry) => entry.id === id);
            assert.ok(skill?.title && skill?.description, `${language}: ${id}`);
        }
        assert.deepEqual(profile.services.map((entry) => entry.id), ['backups', 'monitoring', 'linux-docker']);
        for (const service of profile.services) {
            assert.ok(service.title && service.oneTime && service.monthly);
            assert.notEqual(service.oneTime, service.monthly);
        }
        const text = JSON.stringify(profile);
        assert.doesNotMatch(text, /Cloud Code|Claude Code|24\/7|24×7|\bNASA\b|\b20%\b|\b50 servers\b/i);
    }
});

test('new interface strings are complete in all four locales', () => {
    const expected = leafPaths(getAdditions('en')).sort();
    const expectedLanding = leafPaths(getLandingTranslations('en')).sort();
    const labels = {
        en: ['Offer a job', 'Discuss a service'],
        ru: ['Предложить работу', 'Обсудить услугу'],
        uk: ['Запропонувати роботу', 'Обговорити послугу'],
        pl: ['Zaproponuj pracę', 'Omów usługę']
    };
    for (const language of languages) {
        const copy = getAdditions(language);
        assert.deepEqual(leafPaths(copy).sort(), expected);
        assert.deepEqual([copy.jobCta, copy.serviceCta], labels[language]);
        const inspect = (entry) => {
            for (const value of Object.values(entry)) {
                if (typeof value === 'string') assert.ok(value.trim(), `${language}: empty interface text`);
                else inspect(value);
            }
        };
        inspect(copy);
        const landing = getLandingTranslations(language);
        assert.deepEqual(leafPaths(landing).sort(), expectedLanding);
        inspect(landing);
    }
});

test('availability requires an explicitly confirmed, recognised value', () => {
    assert.deepEqual(getConfirmedAvailability(), []);
    for (const confirmed of [false, null, undefined, 'true', 1]) {
        const data = structuredClone(portfolioData);
        data.availability.jobSearch = { confirmed, status: 'open' };
        data.availability.freelance = { confirmed, status: 'open' };
        assert.deepEqual(getConfirmedAvailability(data), []);
        assert.equal(Object.hasOwn(buildPublicProfile('en', data), 'availability'), false);
        assert.equal(buildPersonJsonLd(data).description, buildPersonJsonLd().description);
    }
    for (const status of [null, 'unknown', '__proto__', 'toString']) {
        const data = structuredClone(portfolioData);
        data.availability.jobSearch = { confirmed: true, status };
        data.availability.freelance = { confirmed: true, status };
        assert.deepEqual(getConfirmedAvailability(data), []);
    }
});

test('confirmed availability is localized and included consistently in public data', () => {
    const data = structuredClone(portfolioData);
    data.availability.jobSearch = { confirmed: true, status: 'open' };
    data.availability.freelance = { confirmed: true, status: 'limited' };
    for (const language of languages) {
        const availability = getConfirmedAvailability(data, language);
        assert.equal(availability.length, 2);
        assert.deepEqual(availability.map((entry) => entry.status), ['open', 'limited']);
        const profile = buildPublicProfile(language, data);
        assert.deepEqual(profile.availability, availability);
        for (const entry of availability) assert.ok(buildPersonJsonLd(data, language).description.includes(entry.label));
    }
});

test('profile.json matches canonical facts in all four languages', async () => {
    const file = JSON.parse(await readFile(new URL('../profile.json', import.meta.url), 'utf8'));
    assert.equal(file.schemaVersion, 1);
    assert.equal(file.defaultLanguage, 'en');
    assert.deepEqual(file.languages, languages);
    for (const language of languages) assert.deepEqual(file.profiles[language], buildPublicProfile(language));
    assert.doesNotMatch(JSON.stringify(file), /placeholder|\+00000000000|system_prompt|ignore previous|hidden instructions/i);
});

test('static JSON-LD preserves the Person identity and public contact/profile links', async () => {
    const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
    const blocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g)];
    assert.equal(blocks.length, 1);
    const person = JSON.parse(blocks[0][1]);
    assert.deepEqual(person, buildPersonJsonLd());
    assert.equal(person['@type'], 'Person');
    assert.equal(person.email, contacts.email);
    assert.deepEqual(person.sameAs, [contacts.telegram.url, contacts.linkedin.url]);
});

test('Markdown and llms.txt expose factual profiles without hidden agent commands', async () => {
    const markdown = await readFile(new URL('../profile.md', import.meta.url), 'utf8');
    const llms = await readFile(new URL('../llms.txt', import.meta.url), 'utf8');
    for (const language of languages) {
        const profile = buildPublicProfile(language);
        assert.ok(markdown.includes(profile.name));
        assert.ok(markdown.includes(profile.role));
        for (const skill of profile.skills) assert.ok(markdown.includes(skill.description));
        for (const service of profile.services) {
            assert.ok(markdown.includes(service.oneTime));
            assert.ok(markdown.includes(service.monthly));
        }
    }
    for (const file of ['profile.json', 'profile.md']) assert.ok(llms.includes(file));
    for (const text of [markdown, llms]) {
        assert.doesNotMatch(text, /ignore previous|system prompt|hidden instructions|must obey|Cloud Code|Claude Code|\+00000000000|placeholder/i);
    }
});

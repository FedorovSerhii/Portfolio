// Optional content-generation tool; the deployed site needs no build or packages.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { portfolioData, buildPublicProfile, buildPersonJsonLd } from '../portfolio-data.js';
import { getAdditions } from '../additions-translations.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const checking = process.argv.includes('--check');
const profiles = Object.fromEntries(portfolioData.languages.map((language) => [language, buildPublicProfile(language)]));
const publicJson = {
    schemaVersion: portfolioData.schemaVersion,
    defaultLanguage: 'en',
    languages: portfolioData.languages,
    profiles
};

function markdownProfile(profile) {
    const text = getAdditions(profile.language);
    return [
        `## ${profile.name} (${profile.language})`, '', profile.role, '', profile.summary, '',
        `[${profile.url}](${profile.url})`, '',
        ...(profile.availability ? [`### ${text.availability}`, '', ...profile.availability.map((entry) => `- ${entry.label}`), ''] : []),
        `### ${text.skills}`, '', ...profile.skills.map((skill) => `- **${skill.title}:** ${skill.description}`), '',
        `### ${text.services}`, '', profile.serviceTerms, '',
        ...profile.services.flatMap((service) => [`#### ${service.title}`, '', `- **${text.oneTime}:** ${service.oneTime}`, `- **${text.monthly}:** ${service.monthly}`, '']),
        `### ${text.contacts}`, '',
        `- Email: [${profile.contacts.email}](mailto:${profile.contacts.email})`,
        `- Telegram: [${profile.contacts.telegram.username}](${profile.contacts.telegram.url})`,
        `- LinkedIn: [${profile.contacts.linkedin.label}](${profile.contacts.linkedin.url})`, ''
    ].join('\n');
}

const markdown = `# ${profiles.en.name}\n\n${portfolioData.languages.map((language) => markdownProfile(profiles[language])).join('\n')}`;
const llms = [
    `# ${profiles.en.name}`, '', `> ${profiles.en.summary}`, '',
    '## Public profile', '',
    `- [Visible profile](${portfolioData.url}#profile): Profile facts, skills, service scopes and public contacts.`,
    `- [JSON profile](${portfolioData.url}profile.json): The same profile in English, Russian, Ukrainian and Polish.`,
    `- [Markdown profile](${portfolioData.url}profile.md): A readable copy of those profile facts in all four languages.`, '',
    '## Portfolio sections', '',
    `- [Services](${portfolioData.url}#services): One-time setup and monthly maintenance scopes.`,
    `- [Technologies](${portfolioData.url}#technologies/proficient): Published tools and technologies.`,
    `- [Work experience](${portfolioData.url}#experience)`,
    `- [Projects](${portfolioData.url}#projects)`,
    `- [Education](${portfolioData.url}#education)`,
    `- [Public contacts](${portfolioData.url}#contacts)`,
    `- [Demo assistant](${portfolioData.url}#assistant): Local preset replies; no connected language model or message sending.`, ''
].join('\n');

const indexPath = resolve(root, 'index.html');
const index = await readFile(indexPath, 'utf8');
const marker = /    <!-- public-profile-jsonld:start -->[\s\S]*?    <!-- public-profile-jsonld:end -->/;
if (!marker.test(index)) throw new Error('Missing JSON-LD generation markers in index.html');
const jsonLd = JSON.stringify(buildPersonJsonLd(), null, 2).replace(/</g, '\\u003c');
const updatedIndex = index.replace(marker, `    <!-- public-profile-jsonld:start -->\n    <script type="application/ld+json" id="profile-jsonld">\n${jsonLd}\n    </script>\n    <!-- public-profile-jsonld:end -->`);
const outputs = new Map([
    ['profile.json', `${JSON.stringify(publicJson, null, 2)}\n`],
    ['profile.md', markdown],
    ['llms.txt', llms],
    ['index.html', updatedIndex]
]);

let stale = false;
for (const [file, expected] of outputs) {
    const path = resolve(root, file);
    if (checking) {
        const actual = await readFile(path, 'utf8').catch(() => null);
        if (actual !== expected) {
            console.error(`Out of date: ${file}`);
            stale = true;
        }
    } else {
        await writeFile(path, expected);
        console.log(`Generated ${file}`);
    }
}
if (stale) process.exitCode = 1;
else if (checking) console.log('Public profile artifacts match portfolio-data.js.');

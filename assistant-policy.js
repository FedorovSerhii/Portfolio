// Shared limits for the local demo and the future relay adapter.
export const ASSISTANT_LIMITS = Object.freeze({ message: 600, history: 12, proposal: 1200 });

export function containsContactDetails(value) {
    return /[^\s@]+@[^\s@]+\.[^\s@]+/u.test(value)
        || /(?:\+?\d[\s().-]*){7,}/u.test(value)
        || /(?:^|\s)@[\p{L}\p{N}_]{3,}/u.test(value);
}

export function classifyMessage(message) {
    const text = message.toLocaleLowerCase().normalize('NFKC');
    const topics = [
        ['limits', /\b(demo|llm|limitations?|limits?|privacy)\b|демо|ограничени|обмежен|ogranicze|prywatno/u],
        ['contacts', /\b(contacts?|email|telegram|linkedin)\b|контакт|почт|пошт|kontakt/u],
        ['services', /\b(services?|backups?|restore|grafana|monitoring|maintenance)\b|услуг|послуг|резерв|восстанов|віднов|монитор|монітор|сопровожд|супров|usług|kopi|utrzyman/u],
        ['skills', /\b(skills?|tools?|n8n|chatgpt|codex|models?|agents?|linux|docker|technologies)\b|навык|навич|инструмент|інструмент|модел|агент|технолог|umiejętno|narzędz|agentow/u],
        ['job', /\b(jobs?|offers?|hire|availability|available)\b|вакан|предлож.*работ|пропозиц.*робот|доступн|prac[ayę]|ofert|dostępno/u],
        ['experience', /\b(experience|employment|education|projects?|years?|certificates?)\b|опыт|досвід|образован|освіт|проект|проєкт|стаж|doświadczen|edukac|projekt|certyfikat/u],
        ['profile', /\b(profile|about|hello|hi)\b|профил|профіл|привет|вітаю|привіт|cześć|profil/u]
    ];
    return topics.find(([, pattern]) => pattern.test(text))?.[0] || 'unsupported';
}

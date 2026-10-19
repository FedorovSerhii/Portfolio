export function formatTelegramMessage(payload, reviewId) {
    const labels = {
        en: ['Where to reply', 'Visitor-provided contact; not verified.', 'Request', 'Reply using this contact. Replies to this bot are not forwarded to the visitor.'],
        uk: ['Куди відповісти', 'Контакт указаний відвідувачем; не перевірений.', 'Запит', 'Відповідайте за цим контактом. Відповідь боту не пересилається відвідувачу.'],
        ru: ['Куда ответить', 'Контакт указан посетителем; не проверен.', 'Запрос', 'Ответьте по этому контакту. Ответ боту не пересылается посетителю.'],
        pl: ['Gdzie odpowiedzieć', 'Kontakt podany przez odwiedzającego; niezweryfikowany.', 'Zapytanie', 'Odpowiedz przez ten kontakt. Odpowiedzi do bota nie są przekazywane odwiedzającemu.'],
    }[payload.language] || ['Where to reply', 'Visitor-provided contact; not verified.', 'Request', 'Replies to this bot are not forwarded.'];
    const escape = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const contact = payload.replyContact;
    if (!contact || !['email', 'telegram'].includes(contact.type) || typeof contact.value !== 'string') throw new Error('Validated reply contact required');
    const reply = contact.type === 'telegram' && /^@[A-Za-z0-9_]{5,32}$/.test(contact.value)
        ? `<a href="https://t.me/${encodeURIComponent(contact.value.slice(1))}">${escape(contact.value)}</a>`
        : escape(contact.value);
    return [escape(`Portfolio · ${payload.intent} · ${payload.language}`), escape(`Ref: ${reviewId}`), '',
        `<b>${labels[0]}</b>`, reply, labels[1], labels[3], '', `<b>${labels[2]}</b>`, escape(payload.proposal)].join('\n');
}

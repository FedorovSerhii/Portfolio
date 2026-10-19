// Syntax validation only: this does not verify ownership or that the account exists.
export function parseReplyContact(input) {
    if (typeof input !== 'string' || !input.trim()) return { error: 'contact_required' };
    const value = input.trim();
    if (value.length > 254 || /[\s\u0000-\u001f\u007f]/u.test(value)) return { error: 'contact_invalid' };
    if (/^@[A-Za-z0-9_]{5,32}$/.test(value)) return { type: 'telegram', value: value.toLowerCase() };
    const parts = value.split('@');
    if (parts.length !== 2) return { error: 'contact_invalid' };
    const [local, domain] = parts;
    if (!/^[A-Za-z0-9._%+-]{1,64}$/.test(local) || local.startsWith('.') || local.endsWith('.') || local.includes('..')) return { error: 'contact_invalid' };
    const labels = domain.split('.');
    if (labels.length < 2 || !/^[A-Za-z]{2,63}$/.test(labels.at(-1)) || labels.some(label => !/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/.test(label))) return { error: 'contact_invalid' };
    return { type: 'email', value: `${local}@${domain.toLowerCase()}` };
}

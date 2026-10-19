export function formatTelegramMessage(payload, reviewId) {
    // Explicit HTML mode with all text escaped: visitors cannot inject formatting.
    return [`Portfolio · ${payload.intent} · ${payload.language}`, `Ref: ${reviewId}`, '', payload.proposal]
        .join('\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

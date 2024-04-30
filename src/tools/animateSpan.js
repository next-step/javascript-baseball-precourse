export const animateResultHeader = (resultHeaderRef, delay) => {
    const tokens = resultHeaderRef.textContent
        .split('')
        .reduce(concatEmoji, ['']);

    resultHeaderRef.innerHTML = tokens
        .map((char, idx) => createSpan(char, idx, delay))
        .join('');

    return tokens.length;
}

const isCharUTF16 = (char) => {
    return (char.charCodeAt(0) >= 0xD800 && char.charCodeAt(0) <= 0xDBFF)
        || (char.charCodeAt(0) >= 0xDC00 && char.charCodeAt(0) <= 0xDFFF);
}

const concatEmoji = (acc, char, i) => {
    if (isCharUTF16(char)) {
        acc[0] += char;
    } else {
        acc.push(char);
    }
    return acc;
}

const millisToFloat = (delay) => {
    return "" + (delay / 1000).toFixed(1);
}

const createSpan = (char, idx, delay) => {
    const delayFloat = millisToFloat(delay);
    return `<span style="animation-delay: ${idx * delayFloat}s;animation-duration: ${delayFloat}s">${char}</span>`
}

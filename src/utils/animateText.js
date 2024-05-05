export const animateText = (textRef, textContent) => {
    const to = textContent.length;
    const from = 0;

    const timing = (timeFraction) => 1 - Math.sin(Math.acos(timeFraction));
    const draw = (progress) => {
        const substrIdx = Math.round((to - from) * progress + from);

        textRef.textContent = textContent.substring(0, substrIdx);
    }

    animate({
        timing,
        draw,
        duration: 500
    });
};

export const animateResultHeader = (resultHeaderRef, delay) => {
    const tokens = resultHeaderRef.textContent
        .split('')
        .reduce(concatEmoji, ['']);

    resultHeaderRef.innerHTML = tokens
        .map((char, idx) => createSpan(char, idx, delay))
        .join('');

    setTimeout(() => resultHeaderRef.innerHTML = tokens.join(''), tokens.length * delay);

    return tokens.length;
};

const isCharUTF16 = (char) => {
    return (char.charCodeAt(0) >= 0xD800 && char.charCodeAt(0) <= 0xDBFF)
        || (char.charCodeAt(0) >= 0xDC00 && char.charCodeAt(0) <= 0xDFFF);
};

const concatEmoji = (acc, char, i) => {
    if (isCharUTF16(char)) {
        acc[0] += char;
    } else {
        acc.push(char);
    }
    return acc;
};

const millisToFloat = (delay) => {
    return (delay / 1000).toFixed(1);
};

const createSpan = (char, idx, delay) => {
    const delayFloat = millisToFloat(delay);
    return `<span style="animation-delay: ${idx * delayFloat}s;animation-duration: ${delayFloat}s">${char}</span>`
};

const animate = ({timing, draw, duration}) => {
    const start = performance.now();
    const animationFrame = (time) => {
        let timeFraction = (time - start) / duration;
        timeFraction = Math.min(timeFraction, 1);

        const progress = timing(timeFraction)

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animationFrame);
        }
    }

    requestAnimationFrame(animationFrame);
};
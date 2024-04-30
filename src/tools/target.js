import {DIGIT_MAX, DIGIT_MIN} from "../constants.js";

export const generateNewDistinct3Digits = () => {
    const digitSet = new Set();

    while (digitSet.size < 3) {
        digitSet.add(randomDigitString(DIGIT_MIN, DIGIT_MAX));
    }

    console.log('정답', ...digitSet);

    return [...digitSet];
}

const randomDigitString = (min, max) => ("" + Math.floor(Math.random() * (max - min) + min));
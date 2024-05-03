import {
    BALL_POINT,
    NOT_FOUND_VALUE,
    STRIKE_POINT
} from "./constants.js";

export const countStrikeAndBall = (currentValue, targetDigits) => {
    return currentValue
        .split('')
        .reduce((acc, curr, i) => {
            if (curr === targetDigits[i]) {
                acc += STRIKE_POINT;
            } else if (targetDigits.indexOf(curr) > NOT_FOUND_VALUE ) {
                acc += BALL_POINT;
            }
            return acc;
        }, 0);
};
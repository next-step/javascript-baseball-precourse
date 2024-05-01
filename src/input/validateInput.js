import {
    ALERT_DIGITS_NOT_DISTINCT,
    ALERT_DIGITS_NOT_LONG_ENOUGH,
    ARROW_LEFT,
    ARROW_RIGHT,
    BACKSPACE,
    ENTER
} from "../constants.js";

export const declineNonNumericInput = (e) => {
    if ((e.keyCode >= 48 && e.keyCode <= 57)
        || e.keyCode === BACKSPACE
        || e.keyCode === ARROW_LEFT
        || e.keyCode === ARROW_RIGHT
    ) {
        return;
    }

    if (e.keyCode === ENTER) {
        e.target.parentNode.querySelector('button').click();
    }

    e.preventDefault();
};

export const isInputInvalid = (inputValue) => {
    if (!isInputValue3Length(inputValue)) {
        alert(ALERT_DIGITS_NOT_LONG_ENOUGH);
        return true;
    }

    if (!isInputValueAllDistinct(inputValue)) {
        alert(ALERT_DIGITS_NOT_DISTINCT);
        return true;
    }

    return false;
};

const isInputValue3Length = (inputValue) => {
    return inputValue.length === 3;
};

const isInputValueAllDistinct = (inputValue) => {
    return new Set(inputValue.split('')).size === 3;
};
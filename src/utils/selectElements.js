import {RESULT_BOARD, RESULT_HEAD, SUBMIT_BUTTON, USER_INPUT} from "./constants.js";

export const selectElements = () => {
    const userInput = document.querySelector(USER_INPUT);
    const submitButton = document.querySelector(SUBMIT_BUTTON);
    const resultBoard = document.querySelector(RESULT_BOARD);
    const resultHead = document.querySelector(RESULT_HEAD);

    return new Map()
        .set(USER_INPUT, userInput)
        .set(SUBMIT_BUTTON, submitButton)
        .set(RESULT_BOARD, resultBoard)
        .set(RESULT_HEAD, resultHead);
}
import {
    ANIMATION_DURATION,
    RESULT_BOARD,
    RESULT_HEAD,
    SUBMIT_BUTTON,
    USER_INPUT
} from "./constants.js";
import {
    countStrikeAndBall,
    printResultOnBoard
} from "./input/handleInput.js";
import {
    declineNonNumericInput,
    isInputInvalid
} from "./input/validateInput.js";
import { animateResultHeader } from "./tools/animateSpan.js";
import { generateNewDistinct3Digits } from "./tools/target.js";

const selectElements = () => {
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

const runGame = () => {
    const elements = selectElements();
    let targetDigits = generateNewDistinct3Digits();

    const resetUserInput = () => elements.get(USER_INPUT).value = "";
    const getUserInput = () => elements.get(USER_INPUT).value;
    const getResultBoardRef = () => elements.get(RESULT_BOARD);
    const getResultHeadRef = () => elements.get(RESULT_HEAD);

    const delayedScoringAndPrinting = (userDigits, delay) => setTimeout(() => {
        const startNewGame = () => {
            targetDigits = generateNewDistinct3Digits();
            resetUserInput();
        };

        const score = countStrikeAndBall(userDigits, targetDigits);

        printResultOnBoard(score, getResultBoardRef(), startNewGame);
    }, delay);

    const validateAndScoreInput = () => {
        const userDigits = getUserInput();

        if (isInputInvalid(userDigits)) {
            resetUserInput();
            return;
        }

        const tokenLength = animateResultHeader(getResultHeadRef(), ANIMATION_DURATION);

        delayedScoringAndPrinting(userDigits, tokenLength * ANIMATION_DURATION);
    };

    elements.get(USER_INPUT).addEventListener('keydown', declineNonNumericInput);
    elements.get(SUBMIT_BUTTON).addEventListener('click', validateAndScoreInput);
}

runGame();
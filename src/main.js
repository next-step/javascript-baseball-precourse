import {
    ANIMATION_DURATION,
    RESULT_BOARD,
    RESULT_HEAD,
    SUBMIT_BUTTON,
    USER_INPUT
} from "./utils/constants.js";
import {
    countStrikeAndBall,
} from "./utils/handleInput.js";
import {
    declineNonNumericInput,
    isInputInvalid
} from "./utils/validateInput.js";
import { animateResultHeader } from "./utils/animateText.js";
import { generateNewDistinct3Digits } from "./utils/generateTarget.js";
import { printResultOnBoard } from "./utils/printResult.js";
import { selectElements } from "./utils/selectElements.js";

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
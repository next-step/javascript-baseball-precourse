import {
    BOARD_HEADER_CORRECT, BOARD_HEADER_READY,
    BOARD_HEADER_WRONG,
    BOARD_PARAGRAPH_CORRECT,
    END_BUTTON_CONTENT, RESET_BUTTON_CONTENT,
    STRIKE_POINT
} from "./constants.js";
import {animateText} from "./animateText.js";

export const printResultOnBoard = (score, resultBoardRef, startNewGame) => {
    if (score === 3 * STRIKE_POINT) {
        writeOnBoard(
            resultBoardRef,
            BOARD_HEADER_CORRECT,
            BOARD_PARAGRAPH_CORRECT
        );

        addResetAndEndButton(resultBoardRef, startNewGame);
        return;
    }

    writeOnBoard(
        resultBoardRef,
        BOARD_HEADER_WRONG,
        makeComment(score)
    );
};

const makeComment = (score) => {
    if (score === 0) {
        return "낫싱";
    }

    let comment = "";

    if (score % STRIKE_POINT > 0) {
        comment += score % 10 + "볼";
    }

    if (score / STRIKE_POINT >= 1) {
        comment += Math.floor(score / 10) + "스트라이크";
    }

    return comment;
};

const writeOnBoard = (resultBoardRef, headerContent, paragraphContent) => {
    const boardHeader = resultBoardRef.querySelector('h3');
    const boardParagraph = resultBoardRef.querySelector('p');

    boardHeader.innerHTML = headerContent;
    animateText(boardParagraph, paragraphContent);
};

const createEndButton = () => {
    const endButton = document.createElement('button');

    endButton.innerHTML = END_BUTTON_CONTENT;
    endButton.addEventListener('click', () => {
        document.querySelector('#app').innerHTML = "<h1>감사합니다</h1>";
    })

    return endButton;
};

const createResetButton = () => {
    const resetButton = document.createElement('button');
    resetButton.innerHTML = RESET_BUTTON_CONTENT;

    return resetButton;
};

const addResetAndEndButton = (resultBoardRef, startNewGame) => {
    if (resultBoardRef.querySelector('button')) {
        return;
    }

    const endButton = createEndButton();
    const resetButton = createResetButton();
    let endButtonTimer = null;
    let isEndButtonAdded = false;

    const removeButton = (buttonRef) => resultBoardRef.removeChild(buttonRef);

    resetButton.addEventListener('click', () => {
        startNewGame();
        removeButton(resetButton);

        if (endButtonTimer) {
            clearTimeout(endButtonTimer);
            endButtonTimer = null;
        }

        if (isEndButtonAdded){
            removeButton(endButton);
            isEndButtonAdded = false;
        }

        writeOnBoard(resultBoardRef, BOARD_HEADER_READY, "");
    })

    resultBoardRef.appendChild(resetButton);

    endButtonTimer = setTimeout(() => {
        resultBoardRef.appendChild(endButton);
        isEndButtonAdded = true;
    }, 2000);
};
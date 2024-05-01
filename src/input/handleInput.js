import {
    BALL_POINT,
    BOARD_HEADER_CORRECT,
    BOARD_HEADER_READY,
    BOARD_HEADER_WRONG,
    BOARD_PARAGRAPH_CORRECT,
    END_BUTTON_CONTENT,
    NOT_FOUND_VALUE,
    RESET_BUTTON_CONTENT,
    STRIKE_POINT
} from "../constants.js";

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
}

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
}

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
}

const writeOnBoard = (resultBoardRef, headerContent, paragraphContent) => {
    const boardHeader = resultBoardRef.querySelector('h3');
    const boardParagraph = resultBoardRef.querySelector('p');

    boardHeader.innerHTML = headerContent;
    boardParagraph.textContent = paragraphContent;
}

const createEndButton = () => {
    const endButton = document.createElement('button');

    endButton.innerHTML = END_BUTTON_CONTENT;
    endButton.addEventListener('click', () => {
        document.querySelector('#app').innerHTML = "<h1>감사합니다</h1>";
    })

    return endButton;
}

const createResetButton = () => {
    const resetButton = document.createElement('button');
    resetButton.innerHTML = RESET_BUTTON_CONTENT;

    return resetButton;
}

const addResetAndEndButton = (resultBoardRef, startNewGame) => {
    if (resultBoardRef.querySelector('button')) {
        return;
    }

    const endButton = createEndButton();
    const resetButton = createResetButton();

    const removeButton = (buttonRef) => resultBoardRef.removeChild(buttonRef);

    resetButton.addEventListener('click', () => {
        startNewGame();
        removeButton(resetButton);
        removeButton(endButton);
        writeOnBoard(resultBoardRef, BOARD_HEADER_READY, "");
    })

    resultBoardRef.appendChild(resetButton);

    setTimeout(() => {
        resultBoardRef.appendChild(endButton);
    }, 2000);
}
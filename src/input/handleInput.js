import {
    BALL_POINT,
    BOARD_HEADER_CORRECT,
    BOARD_HEADER_READY, BOARD_HEADER_WRONG, BOARD_PARAGRAPH_CORRECT, END_BUTTON_CONTENT,
    NOT_FOUND_VALUE,
    RESET_BUTTON_CONTENT,
    STRIKE_POINT
} from "../constants.js";

export const countStrikeAndBall = (currentValue, targetDigits) => {
    let score = 0;

    for (let i = 0; i < 3; i++) {
        if (currentValue[i] === targetDigits[i]) {
            score += STRIKE_POINT;
            continue;
        }

        if (targetDigits.indexOf(currentValue[i]) > NOT_FOUND_VALUE) {
            score += BALL_POINT;
        }
    }

    return score;
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

const addResetAndEndButton = (resultBoardRef, startNewGame) => {
    if (resultBoardRef.querySelector('button')) {
        return;
    }

    const resetButton = document.createElement('button');
    const endButton = document.createElement('button');

    const removeButton = (buttonRef) => resultBoardRef.removeChild(buttonRef);

    resetButton.innerHTML = RESET_BUTTON_CONTENT;
    endButton.innerHTML = END_BUTTON_CONTENT;

    resetButton.addEventListener('click', () => {
        startNewGame();
        removeButton(resetButton);
        removeButton(endButton);
        writeOnBoard(resultBoardRef, BOARD_HEADER_READY, "");
    })

    endButton.addEventListener('click', () => {
        document.querySelector('#app').innerHTML = "<h1>감사합니다</h1>";
    })

    resultBoardRef.appendChild(resetButton);
    resultBoardRef.appendChild(endButton);
}
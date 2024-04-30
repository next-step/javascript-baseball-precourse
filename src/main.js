const DIGIT_MIN = 0;
const DIGIT_MAX = 9;
const USER_INPUT = "#user-input";
const SUBMIT_BUTTON = "#submit-button";
const RESULT_BOARD = "#result-board";
const RESULT_HEAD = "#result-head";
const BACKSPACE = 8;
const ENTER = 13;
const STRIKE_POINT = 10;
const BALL_POINT = 1;
const BOARD_HEADER_CORRECT = "&#127881;정답을 맞추셨습니다&#127881;";
const BOARD_PARAGRAPH_CORRECT = "게임을 새로 시작하시겠습니까?";
const BOARD_HEADER_WRONG = "&#128517;틀렸습니다&#128517;";
const BOARD_HEADER_READY = "숫자를 제출해 주세요";
const RESET_BUTTON_CONTENT = "게임 재시작";
const ALERT_DIGITS_NOT_LONG_ENOUGH = "최소 3자리의 숫자를 입력해 주세요";
const ALERT_DIGITS_NOT_DISTINCT = "중복되는 숫자 없이 주세요";
const NOT_FOUND_VALUE = -1
// 변경 가능
const ANIMATION_DURATION = 700;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;

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

const randomDigitString = (min, max) => ("" + Math.floor(Math.random() * (max - min) + min));

const generateNewDistinct3Digits = () => {
    const digitSet = new Set();

    while (digitSet.size < 3) {
        digitSet.add(randomDigitString(DIGIT_MIN, DIGIT_MAX));
    }

    console.log('정답', ...digitSet);

    return [...digitSet];
}

const declineNonNumericInput = (e) => {
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
}

const isInputValue3Length = (inputValue) => {
    return inputValue.length === 3;
}

const isInputValueAllDistinct = (inputValue) => {
    return new Set(inputValue.split('')).size === 3;
}

const isInputInvalid = (inputValue, resetUserInput) => {
    if (!isInputValue3Length(inputValue)) {
        alert(ALERT_DIGITS_NOT_LONG_ENOUGH);
        resetUserInput();
        return true;
    }

    if (!isInputValueAllDistinct(inputValue)) {
        alert(ALERT_DIGITS_NOT_DISTINCT);
        resetUserInput();
        return true;
    }

    return false;
}

const countStrikeAndBall = (currentValue, targetDigits) => {
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

const addResetButton = (resultBoardRef, startNewGame) => {
    const resetButton = document.createElement('button');
    const removeButton = () => resultBoardRef.removeChild(resetButton);

    resetButton.innerHTML = RESET_BUTTON_CONTENT;

    resetButton.addEventListener('click', () => {
        startNewGame();
        removeButton();
        writeOnBoard(resultBoardRef, BOARD_HEADER_READY, "");
    })

    resultBoardRef.appendChild(resetButton);
}

const printResultOnBoard = (score, resultBoardRef, startNewGame) => {
    if (score === 3 * STRIKE_POINT) {
        writeOnBoard(
            resultBoardRef,
            BOARD_HEADER_CORRECT,
            BOARD_PARAGRAPH_CORRECT
        );

        addResetButton(resultBoardRef, startNewGame);
        return;
    }

    writeOnBoard(
        resultBoardRef,
        BOARD_HEADER_WRONG,
        makeComment(score)
    );
}

const isCharUTF16 = (char) => {
    return (char.charCodeAt(0) >= 0xD800 && char.charCodeAt(0) <= 0xDBFF)
        || (char.charCodeAt(0) >= 0xDC00 && char.charCodeAt(0) <= 0xDFFF);
}

const concatEmoji = (acc, char, i) => {
    if (isCharUTF16(char)) {
        acc[0] += char;
    } else {
        acc.push(char);
    }
    return acc;
}

const millisToFloat = (delay) => {
    return "" + (delay / 1000).toFixed(1);
}

const createSpan = (char, idx, delay) => {
    const delayFloat = millisToFloat(delay);
    return `<span style="animation-delay: ${idx * delayFloat}s;animation-duration: ${delayFloat}s">${char}</span>`
}

const animateResultHeader = (resultHeaderRef, delay) => {
    const simpleInnerHTML = resultHeaderRef.innerHTML;
    const tokens = resultHeaderRef.textContent
        .split('')
        .reduce(concatEmoji, ['']);

    resultHeaderRef.innerHTML = tokens
        .map((char, idx) => createSpan(char, idx, delay))
        .join('');

    // setTimeout(() => {
    //     resultHeaderRef.innerHTML = simpleInnerHTML;
    // }, delay * tokens.length);

    return tokens.length;
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

        if (isInputInvalid(userDigits, resetUserInput)) {
            return;
        }

        const tokenLength = animateResultHeader(getResultHeadRef(), ANIMATION_DURATION);

        delayedScoringAndPrinting(userDigits, tokenLength * ANIMATION_DURATION);
    };

    elements.get(USER_INPUT).addEventListener('keydown', declineNonNumericInput);
    elements.get(SUBMIT_BUTTON).addEventListener('click', validateAndScoreInput);
}

runGame();
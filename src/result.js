import { checkAnswer } from './check.js';
// 컴퓨터가 입력한 값, 랜덤으로 3자리 수 생성
let Numbers = generateRandomNumber();

// 랜덤한 3자리 수 생성
function generateRandomNumber() {
    let randomNumbers = [];
    while (randomNumbers.length < 3) {
        const num = Math.floor(Math.random() * 10);
        if (!randomNumbers.includes(num)) {
            randomNumbers.push(num);
        }
    }
    return randomNumbers;
}

console.log(Numbers)

// 사용자가 입력한 값
let answer;

window.onload = function() {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', () => {
        answer = checkAnswer(answer); // answer 값을 업데이트하고
        if (answer) { // 반환된 값이 유효하면 evaluateGuess 호출
            evaluateGuess(answer);
        }
    });
};

//스트라이크, 볼
let count = 0;

function evaluateGuess() {
    const resultDiv = document.getElementById('result')

    if (count < 10) { // 수정된 부분입니다.
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < Numbers.length; i++) {
            if (Numbers[i] === answer[i]) {
                strike++;
            } else if (answer.includes(Numbers[i])) {
                ball++;
            }
        }

        let resultMessage = '';
        if (strike === 3) {
            resultMessage = '🎉정답을 맞추셨습니다🎉'
            printResult(resultMessage);

        } else if (strike === 0 && ball === 0) {
            resultMessage = '낫싱'
            InputBox();
            printResult(resultMessage);
        } else {
            resultMessage = `${strike}스트라이크 ${ball}볼`
            InputBox();
            printResult(resultMessage);
        } 

        count ++;

    }else {
        resultMessage = '시도 횟수를 초과했습니다.'
    }
    
} 

function printResult(resultMessage , answer) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3><span>&#128221;</span><strong>결과</strong></h3>
    ${resultMessage}`;

    if(resultMessage.includes('🎉정답을 맞추셨습니다🎉')) {
        const restartButton = document.createElement('button')
        resultDiv.appendChild(document.createElement('br'))
        resultDiv.appendChild(document.createElement('br'))
        const restartMessage = document.createElement('span');
        restartMessage.textContent = '게임을 새로 시작하시겠습니까?';
        resultDiv.appendChild(restartMessage);
        resultDiv.appendChild(document.createElement('br'));
        resultDiv.appendChild(document.createElement('br'));
        restartButton.textContent = '게임 재시작'
        restartButton.addEventListener('click',restartGame)
        resultDiv.appendChild(restartButton);
    }
}

// 게임 재시작 함수
function restartGame() {
    // 컴퓨터가 입력한 값, 랜덤으로 3자리 수 생성
    Numbers = generateRandomNumber();
    console.log(Numbers);
    
    // 시도 횟수 초기화
    count = 0;

    // 결과창 초기화
    clearResult();

    //입력 상자의 값 초기화
    InputBox();
    
}

// 결과창 초기화 함수
function clearResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
}

//텍스트 상자 초기화
function InputBox() {
    const inputBox = document.getElementById('userInput');
    inputBox.value = ""; // 기존 입력값을 지웁니다.
    inputBox.focus(); // 입력 상자에 포커스를 맞춥니다.
}

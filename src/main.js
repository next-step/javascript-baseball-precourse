import { checkAnswer } from "./check";
import { generateRandomNumber } from "./randomNumber";
import { evaluateGuess } from "./gameLogic";

// 컴퓨터가 입력한 값, 1~9까지 랜덤으로 3자리 수 생성
let numbers = generateRandomNumber()
// 사용자가 입력한 값
let answer = [];
window.onload = function () {
    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', () => {
        answer = checkAnswer(answer);
        if (answer) {
            const resultMessage = evaluateGuess(numbers, answer)
            printResult(resultMessage)
        }
    });
};

console.log(numbers)

// 출력 메세지 함수
function printResult(resultMessage) {
    const resultDiv = document.getElementById('result')
    resultDiv.innerHTML = resultMessage ? `<h4><span>&#128221;</span>결과<br><br>${resultMessage}</h4>` : ''

    //게임 재시작 안내 문구
    const restartMessage = document.createElement('div')
    restartMessage.textContent = '게임을 새로 시작하시겠습니까?'

    //restartButton 버튼
    const restartButton = document.createElement('button') // restartButton 정의
    restartButton.textContent = '게임 재시작'
    restartButton.id = 'restartButton'
    restartButton.style.display = resultMessage ? 'block' : 'none'
    restartButton.addEventListener('click', restartGame)

    //endGame 버튼
    const endGameButton = document.createElement('button') // restartButton 정의
    endGameButton.textContent = '게임 종료'
    endGameButton.id = 'endGameButton'
    endGameButton.style.display = resultMessage ? 'block' : 'none'
    endGameButton.addEventListener('click', endGame)

    //공백 요소 생성
    const space = document.createElement('div')
    space.textContent = '\xa0' 

    //result div에 추가
    resultDiv.appendChild(restartMessage)
    resultDiv.appendChild(space)
    resultDiv.appendChild(restartButton)
    resultDiv.appendChild(space)
    resultDiv.appendChild(endGameButton)
}

//게임 재시작 함수
function restartGame() {

    numbers = generateRandomNumber()

    console.log(numbers)

    //컴퓨터가 입력한 값, 랜덤으로 3자리 수 생성
    answer = []

    //결과창 초기화
    clearResult()

    //텍스트 상자 초기화
    inputBox()
}

//게임 종료 함수
function endGame() {
    //결과창 초기화
    clearResult()

    //텍스트 상자 초기화
    inputBox()

    //개임 종료 메시지 출력
    const resultDiv = document.getElementById('result')
    const endMessage = document.createElement('h4')
    endMessage.textContent = '게임이 종료되었습니다'
    resultDiv.appendChild(endMessage)
}

// 텍스트 상자 초기화
function inputBox() {
    const inputBox = document.getElementById('userInput')
    inputBox.value = '';
    inputBox.focus(); // 입력 상자에 포커스를 맞춘다.
}

//결과창 초기화 함수
function clearResult() {
    const resultDiv = document.getElementById('result')
    resultDiv.textContent = '';
} 


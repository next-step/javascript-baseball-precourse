import { generateComputerNumber, computerNumber } from './model/ComputerNumberModel.js';
// import { getPlayerNumber, checkAnswer, getPlayerNumber } from './model/playerNumberModel.js';
import { displayGameResult } from './view/baseballGameView.js';

// let computerNumber = [];
let playerNumber = "";

// Computer가 1~9까지의 중복되지 않는 임의의 수 3개를 생성하고 computerNumber에 push 함수
// const generateComputerNumber = () => {
//     while (computerNumber.length < 3) {
//         const number = Math.floor(Math.random() * 9) + 1;
//         if (!computerNumber.includes(number)) {
//             computerNumber.push(number);
//         }
//     }
//     console.log(computerNumber);
// };


const getPlayerNumber = () => {
    const input = document.getElementById("userInput");
    playerNumber = input.value.trim();
    
    // 승리 메시지 입력 후 틀린 결과 입력 시 결과 초기화함
    document.getElementById("gameResult").textContent = "";
    document.getElementById("restartPrompt").style.display = 'none';
    document.getElementById("restartButton").style.display = 'none';

    if (playerNumber.length !== 3 || new Set(playerNumber).size !== 3) {
        alert("잘못된 입력입니다. 1에서 9까지의 숫자를 중복 없이 정확히 3개 입력해주세요.");
        input.value = "";
        return;
    }
    checkAnswer();
};


const checkAnswer = () => {
    let strikes = 0;
    let balls = 0;
    const playerDigits = playerNumber.split("").map(Number);
    const computerDigits = computerNumber.map(Number);

    playerDigits.forEach((digit, index) => {
        if (computerDigits[index] === digit) {
            strikes++;
        } else if (computerDigits.includes(digit)) {
            balls++;
        }
    });

    displayGameResult(strikes, balls);
};

// const displayGameResult = (strikes, balls) => {
//     const resultElement = document.getElementById("gameResult");
//     if (strikes === 3) {
//         resultElement.textContent = ""; // 기존 결과 텍스트 초기화 하고 결과 메시지 출력
//         showRestartOption();
//     } else {

//         if (balls === 0 && strikes === 0) {
//             resultElement.textContent = "낫싱";
//         } else if (balls > 0 && strikes === 0) {
//             resultElement.textContent = `${balls}볼`;
//         } else if (balls === 0 && strikes > 0) {
//             resultElement.textContent = `${strikes}스트라이크`;
//         } else {
//             resultElement.textContent = `${balls}볼 ${strikes}스트라이크`;
//         }
//     }
// };


// const showRestartOption = () => {
//     const restartPrompt = document.getElementById("restartPrompt");
//     const restartButton = document.getElementById("restartButton");
//     restartPrompt.style.display = 'block';
//     restartButton.style.display = 'block';
//     restartButton.onclick = restartGame;
// };

// const restartGame = () => {
//     computerNumber = [];
//     generateComputerNumber();
//     document.getElementById("userInput").value = "";
//     document.getElementById("gameResult").textContent = "";
//     document.getElementById("restartPrompt").style.display = 'none';
//     document.getElementById("restartButton").style.display = 'none';
// };

document.addEventListener("DOMContentLoaded", () => {
    generateComputerNumber();
    document.getElementById("checkButton").addEventListener("click", (event) => {
        event.preventDefault();
        getPlayerNumber();
    });
});

import { computerNumber } from "../computerNumberModel.js";
import { displayGameResult } from "../view/displayGameResultView.js";

let playerNumber = "";

export const getPlayerNumber = () => {
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


export const checkAnswer = () => {
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

export { playerNumber };
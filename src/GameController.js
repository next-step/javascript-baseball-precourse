import GameLogic from './GameLogic.js';
import InputValidator from './inputValidator.js';
import StartGame from "./StartGame.js";

export default class GameController {
    constructor() {
        this.resultElement = document.getElementById("result");
        this.initializeGame(); // 게임 초기화 메서드 호출
        this.setupEventListeners();
    }

    initializeGame() {
        this.randomNumber = GameLogic.getRandomNumber();
    }

    restartGame() {
        this.initializeGame();
        this.resultElement.innerHTML = '';
        document.getElementById("userInput").value = ""; 
    }

    setupEventListeners() {
        document.getElementById("checkButton").addEventListener("click", () => {
            const userInput = document.getElementById("userInput").value;
            if (!InputValidator.validateInput(userInput)) {
                document.getElementById("userInput").value = "";
                return;
            }
            const result = GameLogic.compareResult(this.randomNumber, userInput);
            this.displayResult(result);

            console.log(this.randomNumber);
            if (result.strike === 3) {
                this.resultElement.innerHTML = `
                    <h4>🎉축하합니다! 숫자를 모두 맞췄습니다.🥳</h4>
                    <p>게임을 새로 시작하시겠습니까?</p>
                    <button id="restartButton">게임 재시작</button>
                `;
                document.getElementById("restartButton").addEventListener("click", () => {
                    this.restartGame();
                });
            } else {
                document.getElementById("userInput").value = "";
            }
        });
    }

    displayResult(result) {
        if (result.nothing) {
            this.resultElement.innerHTML = `<h4>낫싱</h4>`;
        } else {
            if (result.strike !== 0 && result.ball !== 0) {
                this.resultElement.innerHTML = `
                    <h4>${result.strike}스트라이크</h4>
                    <h4>${result.ball}볼</h4>
                `;
            } else if (result.strike === 0) {
                this.resultElement.innerHTML = `<h4>${result.ball}볼</h4>`;                
            } else if (result.ball === 0) {
                this.resultElement.innerHTML = `<h4>${result.strike}스트라이크</h4>`;
            }
        }
    }
}

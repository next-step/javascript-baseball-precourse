import GameLogic from "./GameLogic.js";

export default class StartGame {
    constructor() {
        this.resultElement = document.getElementById("result");
    }

    startGame() {
        // 초기화
        this.resultElement.innerHTML = '';
        document.getElementById("userInput").value = "";
        this.randomNumber = GameLogic.getRandomNumber(); // 새로운 랜덤 번호 생성
    }
}
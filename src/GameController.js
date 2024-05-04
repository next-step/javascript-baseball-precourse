import GameLogic from './GameLogic.js';
import InputValidator from './inputValidator.js';
import GameUI from './GameUI.js';
import GameEvents from './GameEvents.js';

export default class GameController {
    constructor() {
        this.gameUI = new GameUI();
        this.gameEvents = new GameEvents(this);

        this.initializeGame(); // 게임 초기화 메서드 호출
        this.gameEvents.setupEventListeners();
    }

    initializeGame() {
        this.randomNumber = GameLogic.getRandomNumber();
        this.gameUI.clearResult();
        document.getElementById("userInput").value = ""; 
    }

    restartGame() {
        this.initializeGame();
    }

    validateInput(userInput) {
        return InputValidator.validateInput(userInput);
    }

    checkResult(userInput) {
        return GameLogic.compareResult(this.randomNumber, userInput);
    }
}

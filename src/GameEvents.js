import GameUI from './GameUI.js';

export default class GameEvents {
    constructor(gameController) {
        this.gameController = gameController;
        this.gameUI = new GameUI();
    }

    setupEventListeners() {
        document.getElementById("checkButton").addEventListener("click", () => {
            const userInput = document.getElementById("userInput").value;
            if (!this.gameController.validateInput(userInput)) {
                document.getElementById("userInput").value = "";
                return;
            }
            const result = this.gameController.checkResult(userInput);
            this.gameUI.displayResult(result);

            if (result.strike === 3) {
                this.gameUI.congratulate();
                document.getElementById("restartButton").addEventListener("click", () => {
                    this.gameController.restartGame();
                });
            } else {
                document.getElementById("userInput").value = "";
            }
        });
    }
}

import { BaseballGameModel } from '../model';
import { BaseballGameView } from '../view';

const checkAnswer = (playerNumber) => {
    let strikes = 0, balls = 0;
    const computerNumber = BaseballGameModel.getComputerNumber();
    const playerDigits = playerNumber.split("").map(Number);

    playerDigits.forEach((digit, index) => {
        if (computerNumber[index] === digit) {
            strikes++;
        } else if (computerNumber.includes(digit)) {
            balls++;
        }
    });

    BaseballGameView.displayGameResult(strikes, balls);
};

export default { checkAnswer };

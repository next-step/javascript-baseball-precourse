export default class GameLogic {
    static getRandomNumber() {
        const randomNumber = [];
        while (randomNumber.length < 3) {
            const number = Math.floor(Math.random() * 9) + 1;
            if (!randomNumber.includes(number)){
                randomNumber.push(number);
            }
        }
        return randomNumber.join('');
    }

    static compareResult(randomNumber, userInput) {
        let result = {
            strike: 0,
            ball: 0,
            nothing: true
        };

        for (let i = 0; i < randomNumber.length; i++) {
            for (let j = 0; j < userInput.length; j++) {
                if (randomNumber[i] === userInput[j] && i === j) {
                    result.strike++;
                    result.nothing = false;
                } else if (randomNumber[i] === userInput[j] && i != j) {
                    result.ball++;
                    result.nothing = false;
                }
            }
        }
        return result;
    }
}
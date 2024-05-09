import { checkAnswer } from "./check";
import { generateRandomNumber } from "./randomNumber";

let answer = [];

export function evaluateGuess(numbers, answer) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === answer[i]) {
            strike++;
        } else if (answer.includes(numbers[i])) {
            ball++;
        }
    }

    let resultMessage = '';
    if (strike === 3) {
        resultMessage = '🎉정답을 맞추셨습니다🎉';
    } else if (strike === 0 && ball === 0) {
        resultMessage = '낫싱';
    } else {
        resultMessage = `${strike} 스트라이크 ${ball} 볼`;
    }
    return resultMessage;
}

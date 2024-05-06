import { randomNum } from "./\brandomNum";

export function gameResult(userInput) {
    let strike = 0;
    let ball = 0;
    let comValue = randomNum();

    // 볼 계산
    for (let i = 0; i < userInput.length; i++) {
        if (comValue.includes(userInput[i]) && userInput[i] !== comValue[i]) {
            ball++;
        }
    }

    // 스트라이크 계산
    for (let i = 0; i < comValue.length; i++) {
        if (userInput[i] === comValue[i]) {
            strike++;
            ball--; 
        }
    }

    ball = ball < 0 ? 0 : ball;

    if (strike === 3) {
        return { message: '정답을 맞추셨습니다! 게임을 새로 시작하시겠습니까?', isCorrect: true };
    } else if (strike === 0 && ball === 0) {
        return { message: '낫싱', isCorrect: false };
    } else {
        return { message: `결과: ${ball}볼 ${strike}스트라이크`, isCorrect: false };
    }
}
import { randomNum } from "./\brandomNum";

let comValue = randomNum();

export function gameResult(userInput) {
    let strike = 0;
    let ball = 0;
    

    for (let i = 0; i < 3; i++) {
        if (userInput[i] === comValue[i]) {
            strike++;
        } else {
            const index = comValue.indexOf(userInput[i]);
            if (index !== -1 && index !== i) {
                // comValue 내에 userInput[i]가 존재하지만, 위치가 다를 경우
                ball++;
            }
        }
    }

    if (strike === 3) {
        return { message: '정답을 맞추셨습니다! 게임을 새로 시작하시겠습니까?', isCorrect: true };
    } else if (strike === 0 && ball === 0) {
        return { message: '낫싱', isCorrect: false };
    } else {
        return { message: `결과: ${ball}볼 ${strike}스트라이크`, isCorrect: false };
    }
}
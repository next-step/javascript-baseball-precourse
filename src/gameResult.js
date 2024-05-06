export function gameResult(userInput, comValue) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (userInput.charAt(i) === comValue.charAt(j)) {
                if (i === j) {
                    strike++;
                } else {
                    ball++;
                }
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
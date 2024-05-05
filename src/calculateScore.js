export function calculateStrikeBall(guessNum, answerNum) {
    let strike = 0
    let ball = 0
    for (let i = 0; i < 3; i++){
        if (guessNum[i] === answerNum[i]) {
            strike++;
        } else if (answerNum.includes(guessNum[i])) {
            ball++;
        }
    }
    return {strike, ball}
}
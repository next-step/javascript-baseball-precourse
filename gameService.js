class BaseballGame {
constructor() {
    this.secretNumber = null;
}

generateSecretNumber() {
    // 1부터 9까지 서로 다른 수로 이루어진 3자리의 숫자 야구 생성
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
    this.secretNumber = '';
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        this.secretNumber += numbers[randomIndex];
        numbers.splice(randomIndex, 1);
    }
}

validateGuess(guess) {
    // 유효성 검증
    if (guess.length !== 3) {
        throw new Error("3자리의 숫자를 입력해주세요.");
    }
    if ((new Set(guess)).size !== 3) {
        throw new Error("서로 다른 숫자로 이루어진 숫자를 입력해주세요.");
    }
    if (guess.includes('0')) {
        throw new Error("0을 포함하지 않는 숫자를 입력해주세요.");
    }
}

calculateScore(guess) {
    // 일치하는 숫자 야구 개수 계산
    let strikes = 0;
    let balls = 0;
    for (let i = 0; i < 3; i++) {
        if (guess[i] === this.secretNumber[i]) {
            strikes++;
        } else if (this.secretNumber.includes(guess[i])) {
            balls++;
        }
    }
    return { strikes, balls };
}
}

// 게임 결과 저장을 위한 클래스
class GameResult {
constructor() {
    this.results = [];
}

addResult(guess, strikes, balls) {
    this.results.push({ Guess: guess, Strikes: strikes, Balls: balls });
}

displayResults() {
    this.results.forEach(result => {
        console.log(`Guess: ${result.Guess}, Strikes: ${result.Strikes}, Balls: ${result.Balls}`);
    });
}
}

// 테스트
const game = new BaseballGame()

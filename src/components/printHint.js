export function classifyHint({ strike, ball}) {
    const resultElement = document.getElementById('result')

    if (strike === 3) {
        resultElement.textContent = '🎉정답을 맞히셨습니다🎉'
    }
    else if (strike !== 0 && ball === 0) {
        resultElement.textContent = `${strike}스트라이크`
    }
    else if (ball !== 0 && strike === 0) {
        resultElement.textContent = `${ball}볼`
    }
    else if (ball != 0 && strike != 0) {
        resultElement.textContent = `${ball}볼 ${strike}스트라이크`
    }
    else {
        resultElement.textContent = '낫싱'
    }
}
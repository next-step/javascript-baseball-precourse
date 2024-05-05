import { threeRandom } from './components/makeRandom.js';
import { checkInput } from './components/numberInput.js';
import { calculateHint } from './components/makeHint.js';
import { classifyHint } from './components/printHint.js';

const gameState = {
    comRandom: null
}
// 숫자를 모두 맞히면 게임이 종료 메시지와 재시작 버튼이 나오는 기능
function setRestartButton() {
    const restartButton = document.getElementById('restartButton')
    restartButton.addEventListener('click', () => window.location.reload())
}

function gameResult() {
    const userInput = checkInput()
    const calHint = calculateHint(userInput, gameState.comRandom)
    classifyHint(calHint)

    const resultElement = document.getElementById('result')
    if (resultElement.textContent.includes('🎉정답을 맞히셨습니다🎉')) {
        const restartButton = document.getElementById('restartButton')
        restartButton.style.display = 'block'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    gameState.comRandom = threeRandom()
    console.log('상대방(컴퓨터)의 수: ', gameState.comRandom)

    document.getElementById('checkButton').addEventListener('click', gameResult)
    setRestartButton()
});
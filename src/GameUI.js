// GameUI.js
export default class GameUI {
    constructor() {
        this.resultElement = document.getElementById("result");
    }

    displayResult(result) {
        if (result.nothing) {
            this.resultElement.innerHTML = `<h4>낫싱</h4>`;
        } else {
            if (result.strike !== 0 && result.ball !== 0) {
                this.resultElement.innerHTML = `
                    <h4>${result.strike}스트라이크</h4>
                    <h4>${result.ball}볼</h4>
                `;
            } else if (result.strike === 0) {
                this.resultElement.innerHTML = `<h4>${result.ball}볼</h4>`;                
            } else if (result.ball === 0) {
                this.resultElement.innerHTML = `<h4>${result.strike}스트라이크</h4>`;
            }
        }
    }

    clearResult() {
        this.resultElement.innerHTML = '';
    }

    congratulate() {
        this.resultElement.innerHTML = `
            <h4>🎉축하합니다! 숫자를 모두 맞췄습니다.🥳</h4>
            <p>게임을 새로 시작하시겠습니까?</p>
            <button id="restartButton">게임 재시작</button>
        `;
    }
}

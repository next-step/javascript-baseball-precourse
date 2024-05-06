import { strike, ball } from './check.js';

export function gameResult() {
    const resultText = document.querySelector('.result__text');
    const resultQuestion = document.querySelector('.result__question');
    if (strike === 3) {
        // 정답일 때 UI 추가
        resultText.innerHTML = '<strong>🎉정답을 맞추셨습니다🎉</strong>';
        resultQuestion.textContent = '게임을 새로 시작하시겠습니까?';
        document.querySelector('.restart__btn').style.display = 'block';
        document.querySelector('.end__btn').style.display = 'none';
    } else {
        // 정답이아닐 때 UI 추가
        resultText.innerHTML = `<strong>${ball}볼 ${strike}스트라이크</strong>⚾️`;
        resultQuestion.textContent = '게임을 종료하시겠습니까?';
        document.querySelector('.restart__btn').style.display = 'none';
        document.querySelector('.end__btn').style.display = 'block';
    }
}

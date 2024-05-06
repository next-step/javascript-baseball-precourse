import { answerNumber, answer } from './answerNum.js';
import { inputCheck, answerCheck } from './check.js';

answerNumber();
inputCheck(answer);

// 버튼 이벤트
export function restartGame() {
    alert('새로운 게임을 시작합니다.');
    location.reload();
}

export function endGame() {
    alert('게임을 종료합니다.');
    location.reload();
}

document.querySelector('.restart__btn').addEventListener('click', restartGame);
document.querySelector('.end__btn').addEventListener('click', endGame);

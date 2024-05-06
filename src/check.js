import { gameResult } from './gameUI.js';
export let inputValue;
export let strike = 0;
export let ball = 0;
export function inputCheck(answer) {
    document.getElementById('inputButton').addEventListener('click', function () {
        inputValue = document.getElementById('inputField').value;

        // 3자리 숫자인지 확인
        if (!/^\d{3}$/.test(inputValue)) {
            alert('3자리 숫자를 입력해주세요.');
            return;
        }

        // 중복된 숫자 확인
        let digits = inputValue.split('');
        let uniqueDigits = Array.from(new Set(digits));
        if (digits.length !== uniqueDigits.length) {
            alert('중복된 숫자를 입력할 수 없습니다.');
            return;
        }
        inputValue = inputValue.split('').map(Number);
        answerCheck(answer, inputValue);
        document.querySelector('.result').style.display = 'block';
        gameResult();
    });
}

export function answerCheck(answer, inputValue) {
    strike = 0;
    ball = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (answer[i] === inputValue[j]) {
                if (i === j) {
                    strike++;
                } else {
                    ball++;
                }
            }
        }
    }
    return { strike, ball };
}

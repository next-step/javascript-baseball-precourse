// main.js

import { Random, value } from './components/Random.js';
import { Strike, strikes } from './components/Strike.js';
import { Ball, balls,  } from './components/Ball.js';
import { result  } from './components/result.js';
import { validateInput } from './components/InputValidator.js';
import { disableInput, enableInput } from './components/InputController.js';

// 임의의 정답 값 설정 및 게임 초기세팅
Random();


// 확인 버튼 클릭 시 stike, ball 계산
const submitButton = document.getElementById("submit");


submitButton.addEventListener('click', () => {
    // value 배열이 비어 있는지 확인
    if (value.length === 0) {
        console.error("Value array is empty. Random function should be called first.");
        return;
    }
    
    //strikes,balls 계산.
    const input = document.getElementById('num').value.trim();


    // 입력값 유효성 검사
    if (!validateInput(input)) {
        console.error("입력값이 유효하지 않습니다.");
        return;
    }


    const inputValue = String(input);
    Strike(inputValue, value);
    Ball(inputValue, value);
    let realballs = balls-strikes;
    console.log(value, strikes,realballs)


    //결과값 보여주기
    result(strikes, realballs);

    // 정답을 맞춘 경우 입력 비활성화
    if (strikes === 3) {
        disableInput();
    }
    
});



//재시작.
const restartButton = document.getElementById("restart");

restartButton.addEventListener('click', () => {
    Random(); // 새로운 랜덤 값 설정
    document.querySelector('.result').style.display = 'none'; // 결과 창 숨기기
});
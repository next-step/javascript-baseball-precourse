// main.js

import { Random, value } from './components/Random.js';
import { Strike, strikes } from './components/Strike.js';
import { Ball, balls,  } from './components/Ball.js';
import { result  } from './components/result.js';


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

    const input = document.getElementById('num').value.trim();
    const inputValue = String(input);
    Strike(inputValue, value);
    Ball(inputValue, value);
    let realballs = balls-strikes;
    console.log(value, strikes,realballs)


    //결과값 보여주기
    result(strikes, realballs);
});


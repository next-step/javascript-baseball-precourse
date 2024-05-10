import randomNumbers from "./randomNumbers.js";
import checkNumbers from "./checkNumbers.js";
import { replay } from "./replay.js";

let answer = [];



window.onload = function () {
    answer = randomNumbers().split(""); // 정답 생성 및 배열로 변환
    document.getElementById("replayButton").style.display = "none"; // 시작할때는 재시작버튼 안보이도록 숨김
    document.getElementById("replayMessage").innerText = ""; //재시작 멘트 숨김

    document.getElementById("checkButton").addEventListener("click", function (event) {
        event.preventDefault(); // 기본 동작(페이지 새로고침) 방지
        checkNumbers(answer); // 사용자가 입력한 숫자 확인 함수 호출
    });

    document.getElementById("replayButton").addEventListener("click", function (event) {
      event.preventDefault(); // 기본 동작(페이지 새로고침) 방지
      replay(); // 게임 재시작 함수 호출
    });

    
};
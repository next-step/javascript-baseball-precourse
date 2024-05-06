import answer from "./checkinput";

function replay() {
    answer = RandomNumbers().split(""); // 정답 생성 및 배열로 변환
    document.getElementById("input").value = ""; // 입력 필드 초기화
    document.getElementById("answer").innerText = answer;
  }
  
  // 게임 초기화 및 시작
  window.onload = function () {
    answer = RandomNumbers().split(""); // 정답 생성 및 배열로 변환
    document.getElementById("answer").innerText = answer;
  };
/*import RandomNumbers from "./randomnums";
import checkN from "./checkinput";
import checkNumbers from "./checkinput";
import replay from "./replay";
*/

let answer = []; //정답 저장
// 1~9까지 랜덤 숫자 3개를 선택하는 함수
function RandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const n = Math.floor(Math.random() * 9) + 1;
      if (!numbers.includes(n)) {
        numbers.push(n);
      }
    }
    return numbers.join(""); // 숫자 배열을 문자열로 반환
  }
  
  // 사용자가 입력한 숫자 확인
  function checkNumbers() {
    const input = document.getElementById("input").value; // 입력값 가져오기
    if (new Set(input).size !== 3 || input.includes("0") || input.length !== 3) {
      alert("잘못된 입력입니다. 중복없이 1~9까지의 숫자를 입력해주세요.");
      input.value ="";
      return;
    }
  
    let strikes = 0;
    let balls = 0;
    const inputNumbers = input.split("");
    answer.forEach((number, index) => {
      if (number === inputNumbers[index]) {
        strikes++;
      } else if (inputNumbers.includes(number)) {
        balls++;
      }
    });

    //console.log(strikes, balls);

  if (strikes === 3) {
    document.getElementById("result").innerText = "정답을 맞추셨습니다";
    document.getElementById("replayButton").style.display = "block"; //재시작 버튼 표시 추가
    document.getElementById("replayMessage").innerText = "게임을 새로 시작하시겠습니까?"; //재시작 멘트 표시 추가

  } else if (strikes === 0 && balls === 0) {
    document.getElementById("result").innerText = "낫싱";
  } else {
    document.getElementById("result").innerText = `${balls}볼 ${strikes}스트라이크`;
  }
}



// 게임 재시작
/*function replay() {
  answer = RandomNumbers().split(""); // 정답 생성 및 배열로 변환
  document.getElementById("input").value = ""; // 입력 필드 초기화
  
  //document.getElementById("answer").innerText = answer;  정답 체크용
}*/
  
  // 게임 초기화 및 시작
  window.onload = function () {
    answer = RandomNumbers().split(""); // 정답 생성 및 배열로 변환
    document.getElementById("replayButton").style.display="none"; // 시작할때는 재시작버튼 안보이도록숨김
    document.getElementById("replayMessage").innerText=""; //재시작 멘트 숨김
  };
  


//html 함수 참조하도록 객체전달합니다
window.checkNumbers=checkNumbers;
window.replay=replay;
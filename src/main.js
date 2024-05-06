let answer = []; // 정답을 저장할 배열

// 1~9까지 랜덤 숫자 3개를 선택하는 함수
function generateRandomNumbers() {
  const numbers = [];
  while (numbers.length < 3) {
    const n = Math.floor(Math.random() * 9) + 1;
    if (!numbers.includes(n)) {
      numbers.push(n);
    }
  }
  return numbers.join(""); // 숫자 배열을 문자열로 반환
}


//input 확인
function checkNumbers() {
  const input = document.getElementById("input").value; 
  if (new Set(input).size !== 3 || input.includes("0") || input.length !== 3) {
    alert("잘못된 입력입니다. 중복없이 1~9까지의 숫자를 입력해주세요.");
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

  
  console.log(strikes, balls);

  if (strikes === 3) {  
    document.getElementById("result").innerText = "정답을 맞추셨습니다";
    // replay(); // 게임 재시작
  } else if (strikes === 0 && balls === 0) {
    document.getElementById("result").innerText = "낫싱";
  } else {
    document.getElementById(
      "result"
    ).innerText = `${balls}볼 ${strikes}스트라이크`;
  }
}


// 게임 재시작
function replay() {
  answer = generateRandomNumbers().split(""); // 정답 생성 및 배열로 변환
  document.getElementById("input").value = ""; // 입력 필드 초기화
  
}

// 게임 초기화 및 시작
window.onload = function () {
  answer = generateRandomNumbers().split(""); // 정답 생성 및 배열로 변환
  
};

// HTML 내에서 함수를 참조할 수 있도록 window 객체에 할당
window.checkNumbers = checkNumbers;
window.replay = replay;
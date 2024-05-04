// pc - 정답 만들기
let answer = generateAnswer();

// 게임 상태
let gameOver = false;

// pc - 정답 생성 함수
function generateAnswer() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answerArray = [];

  for (let i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * numbers.length);
    answerArray.push(numbers[index]);
    numbers.splice(index, 1);
  }
  return answerArray;
}

// 사용자 입력숫자 검증 및 정답과 비교
function checkNum() {
  if (gameOver) {
    alert("게임이 이미 종료되었습니다. 재시작하세요!");
    return;
  }

  let userInput = document.getElementById("userInput").value;

  // 사용자 입력숫자 검증
  if (!isValidInput(userInput)) {
    alert("올바른 3자리 숫자를 입력하세요!");
    return;
  }

  let userArray = userInput.split("").map(Number);
  let strikes = 0;
  let balls = 0;

  // strikes, ball 결과 확인
  for (let i = 0; i < 3; i++) {
    if (userArray[i] === answer[i]) {
      strikes++;
    } else if (answer.includes(userArray[i])) {
      balls++;
    }
  }

  // strikes, ball 결과 출력
  let output = document.getElementById("output");
  if (strikes === 3) {
    output.innerHTML = "정답입니다! 축하합니다!";
    gameOver = true;
  } else if (strikes === 0 && balls === 0) {
    output.innerHTML = "낫싱!";
  } else {
    output.innerHTML = `${strikes} 스트라이크, ${balls} 볼`;
  }
}

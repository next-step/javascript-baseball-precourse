//랜덤한 3자리 수 생성
function generateRandomNumber() {
  let randomNum = [];

  // 중복되지 않는 3자리 숫자 생성
  while (randomNum.length < 3) {
    const random = Math.floor(Math.random() * 9) + 1; // 1부터 9까지의 랜덤한 숫자 생성
    if (!randomNum.includes(random)) {
      // 배열에 중복되지 않는 숫자인지 확인
      randomNum.push(random); // 중복되지 않는 숫자라면 배열에 추가
    }
  }
  return randomNum;
  //return numbers.join(""); // 배열의 숫자를 문자열로 합쳐서 반환
}

let randomNumber = generateRandomNumber();
console.log("randomNumber: ", randomNumber);

let strikeCount = 0;
let ballCount = 0;
let isNothing = false;

//입력받은 수 배열에 넣기
const checkButton = document.querySelector("main button");
checkButton.addEventListener("click", function () {
  const input = document.querySelector("#number").value;
  const inputNumber = input.split("").map(Number);

  //올바른 수 입력했는지 확인
  if (hasDuplicate(inputNumber) || input.length !== 3) {
    alert("잘못된 수를 입력하셨습니다. 다시 입력해주세요.");
    return; // 중복된 숫자가 있을 경우 함수 종료
  }

  //새로운 수 입력하고 버튼 누를때마다 초기화
  strikeCount = 0;
  ballCount = 0;
  isNothing = false;

  //정답 체크 함수
  answerCheck(inputNumber);
});

// 중복된 숫자 있는지 확인하는 함수
function hasDuplicate(inputNumber) {
  // 입력된 숫자 배열에서 중복을 제거한 배열의 길이가 입력된 숫자 배열의 길이보다 작으면 중복된 숫자가 있는 것
  return new Set(inputNumber).size !== inputNumber.length;
}

//정답 체크 함수
function answerCheck(inputNumber) {
  strike(inputNumber);
  ball(inputNumber);
  isNothing = nothing();

  printResult(isNothing);
}

//스트라이크 체크 함수
function strike(inputNumber) {
  for (let i = 0; i < 3; i++) {
    if (randomNumber[i] === inputNumber[i]) {
      strikeCount++;
    }
  }
}

//볼 체크 함수
function ball(inputNumber) {
  for (let i = 0; i < 3; i++) {
    if (
      (i == 0 && randomNumber[i] === inputNumber[i + 1]) ||
      randomNumber[i] === inputNumber[i + 2]
    ) {
      ballCount++;
    } else if (
      (i == 1 && randomNumber[i] === inputNumber[i - 1]) ||
      randomNumber[i] === inputNumber[i + 1]
    ) {
      ballCount++;
    } else if (
      (i == 2 && randomNumber[i] === inputNumber[i - 1]) ||
      randomNumber[i] === inputNumber[i - 2]
    ) {
      ballCount++;
    }
  }
}

//낫싱 체크 함수
function nothing() {
  //스트라이크와 볼이 둘 다 0개면 isNothing이 true
  if (strikeCount === 0 && ballCount === 0) return true;
}

let result;
//결과 출력 함수
function printResult() {
  let footer = document.querySelector("footer");

  // 이전 결과 삭제
  let previousResult = document.querySelector(".result");
  if (previousResult) {
    footer.removeChild(previousResult);
  }

  result = document.createElement("p");
  result.setAttribute("class", "result");
  if (strikeCount == 3) {
    result.innerHTML = "&#127881;정답을 맞추셨습니다!&#127881;";
    footer.appendChild(result);
    //재시작 함수
    restart();
  } else if (!isNothing) {
    result.innerHTML = ballCount + "볼 " + strikeCount + "스트라이크";
    footer.appendChild(result);
  } else {
    result.innerHTML = "낫싱";
    footer.appendChild(result);
  }
}

//정답 후 재시작코멘트, 재시작 버튼 생성
function restart() {
  let footer = document.querySelector("footer");
  let restartComment = document.createElement("p");
  let restartButton = document.createElement("button");

  restartComment.setAttribute("class", "restart");
  restartComment.innerHTML = "게임을 새로 시작하시겠습니까?";
  restartButton.setAttribute("class", "restart");
  restartButton.innerHTML = "게임 재시작";

  footer.appendChild(restartComment);
  footer.appendChild(restartButton);

  //재시작 버튼 클릭 시
  restartButton.addEventListener("click", function () {
    footer.removeChild(result);
    footer.removeChild(restartComment);
    footer.removeChild(restartButton);
    randomNumber = generateRandomNumber();
    console.log("randomNumber: ", randomNumber);
  });
}

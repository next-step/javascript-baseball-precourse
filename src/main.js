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

const randomNumber = generateRandomNumber();
//console.log("randomNumber: ", randomNumber);

let strikeCount = 0;
let ballCount = 0;
let isNothing = false;

//입력받은 수 배열에 넣기
const checkButton = document.querySelector("main button");
checkButton.addEventListener("click", function () {
  const input = document.querySelector("#number").value;
  const inputNumber = input.split("").map(Number);

  //새로운 수 입력하고 버튼 누를때마다 초기화
  strikeCount = 0;
  ballCount = 0;
  isNothing = false;

  //정답 체크 함수
  answerCheck(inputNumber);
});

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

//결과 출력 함수
function printResult() {
  let footer = document.querySelector("footer");

  // 이전 결과 삭제
  let previousResult = document.querySelector(".result");
  if (previousResult) {
    footer.removeChild(previousResult);
  }

  let result = document.createElement("p");
  result.setAttribute("class", "result");
  if (strikeCount == 3) {
    result.innerHTML = "&#127881;정답을 맞추셨습니다!&#127881;";
    restart();
  } else if (!isNothing) {
    result.innerHTML = ballCount + "볼 " + strikeCount + "스트라이크";
  } else {
    result.innerHTML = "낫싱";
  }
  footer.appendChild(result);
}

//정답 후 재시작 함수
function restart() {}

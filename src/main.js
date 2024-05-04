import generateRandomNumber from "./numberGenerator.js";
import { strike, ball, nothing } from "./gameLogic.js";
import { restartUI } from "./restartUI.js";

let randomNumber = generateRandomNumber();

let strikeCount = 0;
let ballCount = 0;
let isNothing = false;

//입력받은 수 배열에 넣기
const checkButton = document.querySelector("main button");
checkButton.addEventListener("click", function () {
  const input = document.querySelector("#number").value;
  const inputNumber = input.split("").map(Number);

  //올바른 수 입력했는지 확인
  if (hasDuplicate(inputNumber) || hasZero(inputNumber) || input.length !== 3) {
    alert("잘못된 수를 입력하셨습니다. 다시 입력해주세요.");
    return; // 중복된 숫자가 있을 경우 함수 종료
  }

  //정답 체크 함수
  answerCheck(inputNumber);
});

// 중복된 숫자 있는지 확인하는 함수
function hasDuplicate(inputNumber) {
  // 입력된 숫자 배열에서 중복 제거한 배열 길이가 입력된 숫자 배열 길이보다 작으면 중복된 숫자가 있는 것
  return new Set(inputNumber).size !== inputNumber.length;
}

function hasZero(inputNumber) {
  return inputNumber.includes(0);
}

//정답 체크 함수
function answerCheck(inputNumber) {
  strikeCount = strike(randomNumber, inputNumber);
  ballCount = ball(randomNumber, inputNumber);
  isNothing = nothing(strikeCount, ballCount);

  printResult(isNothing);
}

let result;
const footer = document.querySelector("footer");

//결과 출력 함수
function printResult() {
  let footer = document.querySelector("footer");

  // 이전 결과 삭제
  let previousResult = document.querySelector(".result");
  if (previousResult) {
    footer.removeChild(previousResult);
  }

  //결과 출력
  result = document.createElement("p");
  result.setAttribute("class", "result");
  if (strikeCount == 3) {
    result.innerHTML = "&#127881;정답을 맞추셨습니다!&#127881;";
    footer.appendChild(result);
    //재시작 함수
    restartUI(footer, result);
    randomNumber = generateRandomNumber();
  } else if (!isNothing) {
    result.innerHTML = ballCount + "볼 " + strikeCount + "스트라이크";
    footer.appendChild(result);
  } else {
    result.innerHTML = "낫싱";
    footer.appendChild(result);
  }
}

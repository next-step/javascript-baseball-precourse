import generateNumber from "./generateNumber";
import checkNumber from "./checkNumber";
import result from "./result";

// 초기 숫자 생성
let targetNumber = generateNumber();
console.log(targetNumber);

document.getElementById("checkButton").addEventListener("click", function () {
  const userInput = document.getElementById("userInput").value;
  checkNumber(userInput);
  result(userInput, targetNumber, restart);
});

function restart() {
  targetNumber = generateNumber();
  document.getElementById("userInput").value = "";
  document.getElementById("result").innerHTML = "";
}

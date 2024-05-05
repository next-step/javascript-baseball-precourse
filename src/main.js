import generateRandomNumber from './randNumber.js';
import checkNumber from './checkNumber.js';

// 정답 랜덤 수 생성
const resultNum = generateRandomNumber();
console.log(resultNum);

// 입력된 수가 3자리이고 각 자리가 중복되지 않는지 확인
document.getElementById("check-button").addEventListener("click", function () {
      const userInput = document.getElementById("user-input").value;
      checkNumber(userInput);
});

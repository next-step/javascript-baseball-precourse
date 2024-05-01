import { setRandomNumber } from "./setRandomNumber";
import { limitInputLength } from "./limitInputLength";
import { removeDuplicateNumber } from "./removeDuplicateNumber";

const computer = setRandomNumber();
console.log(computer);

const userInput = document.getElementById("userInput");
const userButton = document.getElementById("userButton");

/** 3자리 이하 숫자 입력 받기 */
limitInputLength(userInput);

/** 숫자 유효성 검사 */
userButton.addEventListener("click", () => {
  /** 자릿수 확인 */
  if (userInput.value.length < 3) {
    alert(`0~9 사이의 3자리 수를 입력해주세요.`);
    return;
  }

  /** 중복된 숫자 확인*/
  const userNumber = removeDuplicateNumber(userInput.value);
  if (userNumber.size === 3) {
    console.log("게임 진행하기");
  } else {
    alert(`잘못된 값을 입력했습니다. 중복이 없는 3자리 수를 입력해주세요. `);
    userInput.value = [...userNumber].join("");
  }
});

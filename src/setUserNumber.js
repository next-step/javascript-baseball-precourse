import { removeDuplicateNumber } from "./removeDuplicateNumber";

export const setUserNumber = () => {
  const userInput = document.getElementById("userInput");
  if (userInput.value.length < 3) {
    alert(`0~9 사이의 3자리 수를 입력해주세요.`);
    return;
  }

  const userNumber = removeDuplicateNumber(userInput.value);
  if (userNumber.size === 3) {
    return [...userNumber].map(Number);
  } else {
    alert(`잘못된 값을 입력했습니다. 중복이 없는 3자리 수를 입력해주세요. `);
    userInput.value = [...userNumber].join("");
  }
};

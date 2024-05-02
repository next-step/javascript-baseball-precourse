import { removeDuplicateNumber } from "./removeDuplicateNumber";

/** 글자수가 3인지, 중복이 있는 지 확인 후 클라이언트 수 리턴 */
export const getUserNumber = () => {
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

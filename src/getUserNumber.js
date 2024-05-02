/** 입력받은 수에서 중복을 제거한다.
 * @param {number} userNumber 입력받은 숫자
 * @returns {Set} 숫자에서 중복이 존재하지 않는 부분까지만 리턴
*/
const getRemoveDuplicateNumber = (userNumber) => {
  const removeDuplicateNumber = new Set();
  for (let i = 0; i < userNumber.length; i++) {
    if (removeDuplicateNumber.has(userNumber[i])) {
      break;
    } else {
      removeDuplicateNumber.add(userNumber[i]);
    }
  }

  return removeDuplicateNumber;
};

/** 입력받은 수가 글자수가 3인지, 중복 숫자가 있는 지 확인한다.
 * @returns {number[]} 유효성 검사가 완료된 클라이언트 수
*/
export const getUserNumber = () => {
  const userInput = document.getElementById("number__input");
  if (userInput.value.length < 3) {
    alert(`3자리 수를 입력해주세요.`);
    return;
  }

  const userNumber = getRemoveDuplicateNumber(userInput.value);
  if (userNumber.size === 3) {
    return [...userNumber].map(Number);
  } else {
    alert(`잘못된 값을 입력했습니다. 중복이 없는 3자리 수를 입력해주세요. `);
    userInput.value = [...userNumber].join("");
  }
};

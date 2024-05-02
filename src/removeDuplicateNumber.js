/** 클라이언트 숫자에서 중복이 존재하지 않는 부분까지만 리턴 */
export const removeDuplicateNumber = (userInput) => {
  const num = new Set();
  for (let i = 0; i < userInput.length; i++) {
    if (num.has(userInput[i])) {
      break;
    } else {
      num.add(userInput[i]);
    }
  }

  return num;
};

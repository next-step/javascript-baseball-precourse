/** 숫자에서 중복이 존재하지 않는 부분까지만 리턴 */
export const getRemoveDuplicateNumber = (number) => {
  const removeDuplicateNumber = new Set();
  for (let i = 0; i < number.length; i++) {
    if (removeDuplicateNumber.has(number[i])) {
      break;
    } else {
      removeDuplicateNumber.add(number[i]);
    }
  }

  return removeDuplicateNumber;
};

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

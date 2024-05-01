export const limitInputLength = (userInput) => {
  userInput.addEventListener("input", () => {
    const curInput = userInput.value;
    if (curInput.length > 3) {
      userInput.value = curInput.substr(0, 3);
    }
  });
};

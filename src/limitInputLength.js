export const limitInputLength = () => {
  const userInput = document.getElementById("userInput");

  userInput.addEventListener("input", () => {
    const curInput = userInput.value;
    if (curInput.length > 3) {
      userInput.value = curInput.substr(0, 3);
    }
  });
};

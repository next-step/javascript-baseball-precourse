/** 클라이언트의 입력을 최대 3글자로 제한한다. */
export const limitInputLength = () => {
  const userInput = document.getElementById("userInput");

  userInput.addEventListener("input", () => {
    const curInput = userInput.value;
    if (curInput.length > 3) {
      userInput.value = curInput.substr(0, 3);
    }
  });
};

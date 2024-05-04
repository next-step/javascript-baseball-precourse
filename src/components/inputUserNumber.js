import { ERROR } from "../constants/text.js";

/* 사용자로부터 값을 입력받는 기능 */
export const inputUserNumber = async () => {
  try {
    const userInput = document.getElementById("user-input").value;

    if (isNaN(userInput)) throw new Error(ERROR.NUMBER);
    else if (userInput.includes("0")) throw new Error(ERROR.INCLUDE_0);

    if (userInput.length !== 3) throw new Error(ERROR.LENGTH);

    if (new Set(userInput).size !== userInput.length)
      throw new Error(ERROR.REPEATED);

    return [...userInput].map(Number);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

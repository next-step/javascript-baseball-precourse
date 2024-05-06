import calculateResult from "../functions/calculateResult.js";

export default function handleInput(randomNumber, userInput) {
  const userInputValue = userInput.value;

  if (validateInput(userInputValue)) {
    const result = calculateResult(randomNumber, userInputValue);
    // console.log(result);
    return result; // { strikes, balls }
  } else {
    alert("잘못된 입력입니다. 다시 입력해주세요.");
    userInput.value = "";
  }
}

function validateInput(input) {
  return /^[1-9]{3}$/.test(input) && new Set(input).size === 3;
}

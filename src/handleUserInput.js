import { checkUserInput } from "./checkUserInput.js";

export let userInput = '';

export const handleUserInput = (event) => {
  event.preventDefault();
  const input = document.getElementById("inputBox");
  userInput = input.value;

  const setOfNums = new Set(userInput.split(''));
  if (setOfNums.size !== 3){
    alert("중복된 숫자를 입력하셨습니다. 다시 입력해주세요.");
    input.value = '';
    return;
  }
  checkUserInput();
}
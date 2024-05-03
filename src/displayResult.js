import { result } from './checkUserInput.js';

export const displayResult = () => {
  const print = document.getElementById("resultMessage");
  print.textContent = result;
}
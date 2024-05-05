import { createRandomNum } from "./createRandomNum.js";

export const restart = () => {
  document.querySelector('.result-hint').textContent = '';
  document.querySelector('.result-correct').classList.remove('block');
  document.querySelector('.search input').value = '';
  createRandomNum();
}
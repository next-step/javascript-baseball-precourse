import { generateRanDomNumber } from "./computer.js";
import { validateInputNumber } from "./validate.js";

const startBtn = document.querySelector(".btn--start");
const checkBtn = document.querySelector(".btn--check");
const problemSection = document.querySelector(".problem");
const form = document.querySelector("form");
const answerInput = document.querySelector("#input--answer");
const resultSection = document.querySelector(".result");
const resultText = document.querySelector(".result__text");
const resultBtn = document.querySelector(".result__btn");
const restartBtn = document.querySelector(".btn--restart");
const exitBtn = document.querySelector(".btn--exit");

let randomNumber;

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  problemSection.classList.remove("hidden");
  randomNumber = generateRanDomNumber();
  console.log(randomNumber);
});

answerInput.addEventListener("input", (event) => {
  if (validateInputNumber(event.target.value)) {
    checkBtn.disabled = event.target.value.length !== 3;
  } else {
    event.target.value = event.target.value.slice(0, -1);
    return;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = answerInput.value;

  let strikes = 0;
  let balls = 0;

  const randomNumberStr = randomNumber.toString();

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === randomNumberStr[i]) {
      strikes++;
    } else if (randomNumberStr.includes(answer[i])) {
      balls++;
    }
  }

  let resultMessage = `${answer} -> `;
  if (strikes === 0 && balls === 0) {
    resultMessage += "낫싱 🥲";
  } else {
    resultMessage += `${strikes} 스트라이크, ${balls} 볼`;
  }

  resultText.textContent = resultMessage;
  resultSection.classList.remove("hidden");
  event.target.reset();

  if (strikes === 3) {
    resultText.textContent += " 🎉 정답을 맞추셨습니다 🎉";
    resultBtn.classList.remove("hidden");
  }
});

restartBtn.addEventListener("click", () => {
  resultSection.classList.add("hidden");

  randomNumber = generateRanDomNumber();
  console.log(randomNumber);
});

exitBtn.addEventListener("click", () => {
  startBtn.classList.remove("hidden");
  problemSection.classList.add("hidden");
  resultSection.classList.add("hidden");
});

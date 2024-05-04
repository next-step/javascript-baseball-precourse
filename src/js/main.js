import { generateRanDomNumber } from "./computer.js";
import { validateInputNumber } from "./validate.js";

const startBtn = document.querySelector(".btn--start");
const checkBtn = document.querySelector(".btn--check");
const problemSection = document.querySelector(".problem");
const form = document.querySelector("form");
const answerInput = document.querySelector("#input--answer");
const resultSection = document.querySelector(".result");
const resultText = document.querySelector(".result__text");

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
  if (answer === randomNumber.toString()) {
    resultText.textContent = "🎉 정답을 맞추셨습니다 🎉";
    resultSection.classList.remove("hidden");
  } else {
    resultText.textContent = "틀렸습니다! 다시 시도해보세요 🥲";
    resultSection.classList.remove("hidden");
    event.target.reset();
  }
});

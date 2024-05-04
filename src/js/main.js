import { generateRanDomNumber } from "./computer.js";
import { validateInputNumber } from "./validate.js";

const startBtn = document.querySelector(".btn--start");
const checkBtn = document.querySelector(".btn--check");
const problemSection = document.querySelector(".problem");
const form = document.querySelector("form");
const answerInput = document.querySelector("#input--answer");

let randomNumber;

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  problemSection.classList.remove("hidden");
  randomNumber = generateRanDomNumber();
  console.log(randomNumber);
});

answerInput.addEventListener("input", (event) => {
  if (validateInputNumber(event.target.value)) {
    if (event.target.value.length === 3) {
      checkBtn.disabled = false;
    }
  } else {
    event.target.value = event.target.value.slice(0, -1);
    return;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = answerInput.value;
  if (answer === randomNumber.toString()) {
    alert("정답입니다!");
  } else {
    alert("틀렸습니다!");
    event.target.reset();
  }
});

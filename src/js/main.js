import { generateRanDomNumber } from "./computer.js";

const startBtn = document.querySelector("#btn--start");
const checkBtn = document.querySelector("#btn--check");
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = answerInput.value;
  if (answer === randomNumber.toString()) {
    alert("정답입니다!");
  } else {
    alert("틀렸습니다!");
  }
});

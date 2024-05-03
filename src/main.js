const startBtn = document.querySelector("#btn--start");
const problemSection = document.querySelector(".problem");

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  problemSection.classList.remove("hidden");
});

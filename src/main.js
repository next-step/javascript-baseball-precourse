import { Rival } from "./rival";

let game = new Rival();
const resetButton = document.getElementById("reset");
resetButton.style.display = "none";

document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();
  const input = document.getElementById("input").value;
  game.getValue(input);
  document.getElementById("input").value = '';
}

document.getElementById("reset").onclick = function () {
  document.getElementById("input").value = '';
  document.getElementById("result").innerHTML = '';
  game = new Rival();
  resetButton.style.display = "none";
}
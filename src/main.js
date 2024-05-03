import { Rival } from "./rival";

let game = new Rival();

document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();
  const input = document.getElementById("input").value;
  game.getValue(input);
}

function resetGame() {
  document.getElementById("input").value = '';
  document.getElementById("result").innerHTML = '';
  game = new Rival();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("reset").addEventListener('click', resetGame);
  resetGame();
});

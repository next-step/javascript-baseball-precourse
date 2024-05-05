import { goodGame } from "./gg.js";

export const showRestartButton = () => {
  const restart = document.getElementById("restart-or-over");
  restart.style.display = "block";
  goodGame();
};

export const showGameStatus = () => {
  const gameStatus = document.getElementById("game-status");
};

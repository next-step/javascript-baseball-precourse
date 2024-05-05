import { input_num, gameStatus } from "./checkInputValue.js";

export const showStatus = () => {
  document.getElementById("input_num").textContent = input_num;
  document.getElementById("game-status").textContent = gameStatus;
};

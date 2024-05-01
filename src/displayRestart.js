import { selectRestart } from "./selectRestart";

export const displayRestart = () => {
  const restart = document.getElementById("restart");
  const restartButton = document.getElementById("restart__button");
  restart.style.display = "block";
  restartButton.addEventListener("click", selectRestart);
};

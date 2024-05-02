import { selectRestart } from "./selectRestart";

/** 재시작 버튼을 화면에 출력한다. */
export const displayRestart = () => {
  const restart = document.getElementById("restart");
  const restartButton = document.getElementById("restart__button");
  restart.style.display = "block";
  restartButton.addEventListener("click", selectRestart);
};

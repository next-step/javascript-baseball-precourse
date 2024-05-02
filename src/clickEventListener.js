import { playBaseball } from "./playBaseball";
import { selectRestart } from './selectRestart';

/** 확인 버튼을 클릭하면 야구 게임을 진행한다. */
export const clickNumberConfirm = () => {
  const numberButton = document.getElementById("number__button");
  numberButton.addEventListener("click", playBaseball);
};

/** 재시작 버튼을 클릭하면 재시작 여부를 받는다.*/
export const clickRestart = () => {
  const restartButton = document.getElementById("restart__button");
  restartButton.addEventListener("click", selectRestart);
};

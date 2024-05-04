import { Game } from "./game.js";

const inputEl = document.querySelector(".input #input__textfield");
const inputBtnEl = document.querySelector(".input #input__btn");
const resultTxtEl = document.querySelector(".result .result__text");
const restartBtnEl = document.querySelector(".result .result__btn");
const restartMsgEl = document.querySelector(".result .result__message");

const game = new Game();
console.log(game.answer);

inputBtnEl.addEventListener("click", function () {
  game.compareResult(inputEl);
  resultTxtEl.innerText = game.getResult();

  if (game.isGameSet) {
    restartMsgEl.innerText = "게임을 새로 시작하시겠습니까?";
    restartBtnEl.type = "button";
  }
});

restartBtnEl.addEventListener("click", function () {
  game.restart(() => {
    restartBtnEl.type = "hidden";
    resultTxtEl.innerText = game.getResult();
    inputEl.value = "";
    restartMsgEl.innerText = "";
  });
});

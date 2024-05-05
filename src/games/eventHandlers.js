import {
  inputTextFieldEl,
  inputBtnEl,
  restartBtnEl,
  resultTxtEl,
  restartMsgEl,
  finishBtnEl,
  titleScreenEl,
  titleContainersEl,
} from "../components/elements.js";

import {
  showElement,
  hideElement,
  clearElements,
  enableInputTextField,
  disableInputTextField,
  enableBtn,
  disableBtn,
  appendLog,
} from "../components/domManipulation.js";

import { RESTART_MESSAGE } from "../utils/constants.js";

let game;

export function initGameInstance(gameInstance) {
  game = gameInstance;
}

export function handleInputTextFieldKeyPress(event) {
  if (event.key === "Enter") {
    inputBtnEl.click();
  }
}

export function handleInputBtnClick() {
  if (game.compareResult(inputTextFieldEl)) {
    resultTxtEl.innerText = game.getResult();
    inputTextFieldEl.value = "";
    inputTextFieldEl.focus();

    if (game.isGameSet) {
      disableInputTextField();
      disableBtn(inputBtnEl);
      restartMsgEl.innerText = RESTART_MESSAGE;
      restartBtnEl.type = "button";
      finishBtnEl.type = "button";
    }

    appendLog(game.getLastLog());
  }
}

export function handleRestartBtnClick() {
  game.restart(() => {
    enableInputTextField();
    enableBtn(inputBtnEl);
    clearElements();
    inputTextFieldEl.focus();
  });
}

export function handleTitleStartBtnClick() {
  enableInputTextField();
  hideElement(titleScreenEl);
  inputTextFieldEl.focus();
  game.generateRandomNumber();
}

export function handleDOMContentLoaded() {
  showElement(titleContainersEl);
}

export function handleFinishBtnClick() {
  showElement(titleScreenEl);
  clearElements();
  game.isGameSet = false;
}

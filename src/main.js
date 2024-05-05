import { Game } from "./games/game.js";
import { inputTextFieldEl, inputBtnEl, restartBtnEl, finishBtnEl, titleStartBtnEl } from "./components/elements.js";
import {
  initGameInstance,
  handleInputTextFieldKeyPress,
  handleInputBtnClick,
  handleRestartBtnClick,
  handleTitleStartBtnClick,
  handleDOMContentLoaded,
  handleFinishBtnClick,
} from "./games/eventHandlers.js";

const game = new Game();

initGameInstance(game);
inputTextFieldEl.addEventListener("keypress", handleInputTextFieldKeyPress);
inputBtnEl.addEventListener("click", handleInputBtnClick);
restartBtnEl.addEventListener("click", handleRestartBtnClick);
titleStartBtnEl.addEventListener("click", handleTitleStartBtnClick);
document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
finishBtnEl.addEventListener("click", handleFinishBtnClick);

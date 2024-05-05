import {
  inputTextFieldEl,
  inputBtnEl,
  resultTxtEl,
  restartMsgEl,
  logsEl,
  restartBtnEl,
  finishBtnEl,
} from "./elements.js";

export function showElement(element) {
  element.classList.remove("hidden");
}

export function hideElement(element) {
  element.classList.add("hidden");
}

export function clearElements() {
  resultTxtEl.innerText = "";
  restartMsgEl.innerText = "";
  logsEl.innerHTML = "";
  restartBtnEl.type = "hidden";
  finishBtnEl.type = "hidden";
  enableBtn(inputBtnEl);
}

export function enableInputTextField() {
  inputTextFieldEl.disabled = false;
}

export function disableInputTextField() {
  inputTextFieldEl.disabled = true;
}

export function enableBtn(btnEl) {
  btnEl.disabled = false;
}

export function disableBtn(btnEl) {
  btnEl.disabled = true;
}

export function appendLog(log) {
  const li = document.createElement("li");
  li.textContent = log;
  logsEl.appendChild(li);
}

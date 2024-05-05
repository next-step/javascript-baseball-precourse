import "../utils/isNotIncludes.js";
import { ERROR_MESSAGE, RESULT_NOTHING, RESULT_CORRECT } from "../utils/constants.js";

export class Game {
  #answer;

  constructor() {
    this.#answer = undefined;
    this.result = "";
    this.isGameSet = false;
    this.logs = [];
  }

  generateRandomNumber() {
    let number = "";

    while (number.length < 3) {
      const randomNumber = Math.floor(Math.random() * 9) + 1;
      if (number.isNotIncludes(randomNumber)) {
        number += randomNumber;
      }
    }
    console.log(number);
    this.#answer = number;
  }

  compareResult(inputEl) {
    let inputValue = inputEl.value;
    if (!this.#isValid(inputValue)) {
      this.#alertHandler(inputEl);
      return false;
    }
    const { strikeCount, ballCount, nothingCount } = this.#countHits(inputValue);
    this.#setResult(strikeCount, ballCount, nothingCount, () => {
      this.logs.push(`${inputValue}: ${this.result}`);
    });

    return true;
  }

  #countHits(inputValue) {
    let nothingCount = 0;
    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < this.#answer.length; i++) {
      if (inputValue[i] === this.#answer[i]) {
        strikeCount += 1;
        continue;
      }

      if (inputValue.isNotIncludes(this.#answer[i])) {
        nothingCount += 1;
      } else {
        ballCount += 1;
      }
    }

    return { strikeCount, ballCount, nothingCount };
  }

  #alertHandler(inputEl) {
    alert(ERROR_MESSAGE);
    this.#resetInputEl(inputEl);
  }

  #resetInputEl(inputEl) {
    inputEl.value = "";
    inputEl.focus();
  }

  #setResult(strikeCount, ballCount, nothingCount, callback) {
    if (nothingCount === 3) {
      this.result = RESULT_NOTHING;
    } else if (strikeCount === 3) {
      this.result = RESULT_CORRECT;
      this.isGameSet = true;
    } else {
      if (strikeCount === 0) {
        this.result = `${ballCount}볼`;
      } else if (ballCount === 0) {
        this.result = `${strikeCount}스트라이크`;
      } else {
        this.result = `${ballCount}볼 ${strikeCount}스트라이크`;
      }
    }

    callback();
  }

  getResult() {
    return this.result;
  }

  getLastLog() {
    return this.logs[this.logs.length - 1];
  }

  addLog(logsEl) {
    const li = document.createElement("li");
    li.textContent = game.getLastLog();
    logsEl.appendChild(li);
  }

  #isValid(input) {
    let numPattern = /^[1-9]+$/;

    if (!numPattern.test(input)) {
      return false;
    }
    if (input.length !== 3) {
      return false;
    }
    if (new Set(input).size !== input.length) {
      return false;
    }

    return true;
  }

  restart(complete) {
    this.generateRandomNumber();
    this.result = "";
    this.isGameSet = false;
    complete();
  }
}

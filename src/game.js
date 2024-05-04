import "./isNotIncludes.js";

export class Game {
  #answer;

  constructor() {
    this.#answer = this.generateRandomNumber();
    this.result = "";
    this.isGameSet = false;
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
    return number;
  }

  compareResult(inputEl) {
    let inputValue = inputEl.value;
    if (!this.#isValid(inputValue)) {
      this.#alertHandler(inputEl);
      return;
    }
    const { strikeCount, ballCount, nothingCount } = this.#countHits(inputValue);
    this.#setResult(strikeCount, ballCount, nothingCount);
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
    alert("1~9까지의 수를 중복없이 3개 입력해주세요.");
    this.#resetInputEl(inputEl);
  }

  #resetInputEl(inputEl) {
    inputEl.value = "";
    inputEl.focus();
  }

  #setResult(strikeCount, ballCount, nothingCount) {
    if (nothingCount === 3) {
      this.result = "낫싱";
    } else if (strikeCount === 3) {
      this.result = "🎉정답을 맞추셨습니다🎉";
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
  }

  getResult() {
    return this.result;
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
    this.#answer = this.generateRandomNumber();
    this.result = "";
    this.isGameSet = false;

    complete();
  }
}

import { generateNumberInRangeWithLength } from '../utils/generateNumberInRangeWithLength.js';

export default class BaseballGame {
  #computerNumbers;

  #userNumbers;

  constructor() {
    this.#initializeComputerNumbers();
  }

  generateHint(inputValue) {
    this.#userNumbers = String(inputValue).split('').map(Number);
    const strikeCount = this.#countStrikes();
    const ballCount = this.#countBalls(strikeCount);
  }

  #countStrikes() {
    return this.#userNumbers.reduce(
      (count, digit, index) => (digit === this.#computerNumbers[index] ? count + 1 : count),
      0,
    );
  }

  #countBalls(strikeCount) {
    const ballCount = this.#userNumbers.reduce(
      (count, digit) => (this.#computerNumbers.includes(digit) ? count + 1 : count),
      0,
    );
    return ballCount - strikeCount;
  }

  #initializeComputerNumbers() {
    const generatedNumber = generateNumberInRangeWithLength(
      NUMBER.MIN_RANGE,
      NUMBER.MAX_RANGE,
      NUMBER.LENGTH,
    );
    this.#computerNumbers = String(generatedNumber).split('').map(Number);
  }
}

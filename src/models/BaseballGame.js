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
  }

  #countStrikes() {
    return this.#userNumbers.reduce(
      (count, digit, index) => (digit === this.#computerNumbers[index] ? count + 1 : count),
      0,
    );
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

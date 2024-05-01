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
    const hintMessage = this.#generateHintMessage(ballCount, strikeCount);
    return hintMessage;
  }

  #initializeComputerNumbers() {
    const generatedNumber = generateNumberInRangeWithLength(
      NUMBER.MIN_RANGE,
      NUMBER.MAX_RANGE,
      NUMBER.LENGTH,
    );
    this.#computerNumbers = String(generatedNumber).split('').map(Number);
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

  #generateHintMessage(ballCount, strikeCount) {
    const hintMessage = [];
    if (ballCount !== 0) hintMessage.push(`${ballCount}${HINT.BALL}`);
    if (strikeCount !== 0) hintMessage.push(`${strikeCount}${HINT.STRIKE}`);
    if (ballCount === 0 && strikeCount === 0) hintMessage.push(HINT.NOTHING);
    return hintMessage;
  }
}

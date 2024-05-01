import { generateNumberInRangeWithLength } from '../utils/generateNumberInRangeWithLength.js';

export default class BaseballGame {
  #computerNumbers;

  #userNumbers;

  constructor() {
    this.#initializeComputerNumbers();
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

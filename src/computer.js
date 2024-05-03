class Computer {
  constructor() {
    this.answer = this.generateAnswer();
  }
  getShuffledArray() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return arr.sort(() => Math.random() - 0.5);
  }
  generateAnswer() {
    const arr = this.getShuffledArray();
    return arr.slice(0, 3);
  }
  reallocateAnswer() {
    this.answer = this.generateAnswer();
  }
  existsInAnswer(num) {
    return this.answer.includes(num);
  }

  /**
   * Returns true if the number is 'Strike' number, false if not
   *
   * @param {int} num
   * @param {int} index
   * @returns {boolean}
   */
  isStrike(num, index) {
    return this.answer[index] === num;
  }
}
export default Computer;

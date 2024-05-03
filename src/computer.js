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
}
export default Computer;

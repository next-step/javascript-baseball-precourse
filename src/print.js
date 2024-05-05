export function printResult(restart) {
  restart.style.display = 'block';
}

export function printHint(strikes, balls) {
  return strikes === 0 && balls === 0 ? '낫싱' : `스트라이크: ${strikes}, 볼: ${balls}`;
}

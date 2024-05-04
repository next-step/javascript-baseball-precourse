export function checkIsDuplicate(array) {
  return new Set(array).size !== array.length;
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

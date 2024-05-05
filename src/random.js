export function getRandomNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.sort(() => Math.random() - 0.5);
  const randomNumbers = numbers.slice(0, 3);
  console.log(randomNumbers);
  return randomNumbers;
}
  
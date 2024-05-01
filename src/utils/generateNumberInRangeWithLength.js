const DECIMAL = 10;

export const generateNumberInRangeWithLength = (min, max, length) => {
  const numbers = new Set();
  while (numbers.size < length) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNumber);
  }
  return parseInt([...numbers].join(''), DECIMAL);
};

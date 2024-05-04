export function generateRanDomNumber() {
  const uniqueDigits = new Set();
  const min = 1,
    max = 9;

  while (uniqueDigits.size < 3) {
    const randomDigit = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueDigits.add(randomDigit);
  }

  const randomThreeDigits = Array.from(uniqueDigits).join("");
  return parseInt(randomThreeDigits, 10);
}

// 랜덤한 3자리 숫자를 생성하는 함수
export function generateRandomNumber() {
  const uniqueDigits = new Set();
  const min = 1;
  const max = 9;

  
  while (uniqueDigits.size < 3) {
    const randomDigit = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueDigits.add(randomDigit);
  }

  const randomThreeDigits = Array.from(uniqueDigits).join("");
  return parseInt(randomThreeDigits, 10);
}

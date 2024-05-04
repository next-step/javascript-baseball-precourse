export default function checkNumber(userInput) {
  const isThreeDigits = /^\d{3}$/.test(userInput);
  const isUniqueDigits = new Set(userInput).size === 3;

  if (!isThreeDigits || !isUniqueDigits) {
    alert("3자리 수를 중복 없이 입력해주세요.");
    return false;
  }

  return true;
}

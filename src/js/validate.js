export function validateInputNumber(inputNumber) {
  // 숫자로만 이루어졌는지 확인
  if (!/^\d+$/.test(inputNumber)) {
    alert("숫자만 입력해주세요.");
    return false;
  }

  // 모든 숫자가 1부터 9까지인지 확인
  for (const digit of inputNumber) {
    const num = parseInt(digit, 10);
    if (num < 1 || num > 9) {
      alert("1~9 사이의 숫자를 입력해주세요");
      return false;
    }
  }

  // 입력이 1~3자리인지 확인
  if (inputNumber.length < 1 || inputNumber.length > 3) {
    alert("3자리 숫자를 입력해주세요.");
    return false;
  }

  // 각 숫자가 고유한지 확인
  if (new Set(inputNumber).size !== inputNumber.length) {
    alert("중복되지 않은 숫자를 입력해주세요.");
    return false;
  }

  // 모든 검증을 통과하면 true 반환
  return true;
}

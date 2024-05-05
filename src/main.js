// 입력값 배열 처리
function processInput(input) {
  return input.split('').map(Number);
}

// 입력값 유효성 체크
function checkInput(input) {
  if (input.length !== 3) {
    return false;
  }
  const unums = new Set(input);
  return unums.size === 3;
}

// 랜덤 숫자 생성
function generateNumber() {
  const numbers = [];
  while (numbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}


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


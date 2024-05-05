// 랜덤 숫자 생성
export function generateRandomNumber() {
  const numbers = [];
  while (numbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.join('');
}

// 유효성 검증
export function validateInput(number) {
  if (number.length !== 3) {
    window.alert('3자리의 수를 입력해주세요.');
  }

  else if (new Set(number).size !== 3) {
    window.alert('중복되지 않은 숫자를 입력해주세요.');
  }

  else if (number.includes('0')) {
    window.alert('0을 제외한 숫자를 입력해주세요.');
  }
}

// 스트라이크 및 볼 계산
export function calculateMatchingNumbersAndPositions(targetNumber, guessNumber) {
  const matchingPositions = calculateMatchingPositions(targetNumber, guessNumber);
  const matchingNumbers = calculateMatchingNumbers(targetNumber, guessNumber, matchingPositions);

  return [matchingNumbers, matchingPositions];
}

// 볼 계산
function calculateMatchingNumbers(targetNumber, guessNumber, matchingPositions) {
  let matchingNumbers = 0;

  for (let i = 0; i < targetNumber.length; i++) {
    if (targetNumber.includes(guessNumber[i]) && targetNumber[i] !== guessNumber[i]) {
      matchingNumbers++;
    }
  }

  return matchingNumbers;
}

// 스트라이크 계산
function calculateMatchingPositions(targetNumber, guessNumber) {
  let matchingPositions = 0;

  for (let i = 0; i < targetNumber.length; i++) {
    if (targetNumber[i] === guessNumber[i]) {
      matchingPositions++;
    }
  }

  return matchingPositions;
}

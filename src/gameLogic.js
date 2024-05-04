//스트라이크 체크 함수
export function strike(randomNumber, inputNumber) {
  let strikeCount = 0;
  for (let i = 0; i < 3; i++) {
    if (randomNumber[i] === inputNumber[i]) {
      strikeCount++;
    }
  }
  return strikeCount;
}

//볼 체크 함수
export function ball(randomNumber, inputNumber) {
  let ballCount = 0;
  for (let i = 0; i < 3; i++) {
    if (
      (i == 0 && randomNumber[i] === inputNumber[i + 1]) ||
      randomNumber[i] === inputNumber[i + 2]
    ) {
      ballCount++;
    } else if (
      (i == 1 && randomNumber[i] === inputNumber[i - 1]) ||
      randomNumber[i] === inputNumber[i + 1]
    ) {
      ballCount++;
    } else if (
      (i == 2 && randomNumber[i] === inputNumber[i - 1]) ||
      randomNumber[i] === inputNumber[i - 2]
    ) {
      ballCount++;
    }
  }
  return ballCount;
}

//낫싱 체크 함수
export function nothing(strikeCount, ballCount) {
  let isNothing = false;
  //스트라이크와 볼이 둘 다 0개면 isNothing이 true
  return strikeCount === 0 && ballCount === 0;
}

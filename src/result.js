export const howMany = (n, answer) => {
  // 사용자가 입력한 숫자와 정답을 비교하는 함수
  let s = 0;
  let b = 0;
  let result;
  for (let i = 0; i < 3; i++) {
    if (n[i] == answer[i]) {
      s++;
    } else if (answer.includes(n[i])) {
      b++;
    }
  }
  result = printResult(b, s);
  return result;
};

const printResult = (b, s) => {
  // 결과를 출력하는 함수
  let result;
  if (b === 0 && s === 0) {
    result = "낫싱";
  } else {
    result = b + "볼 " + s + "스트라이크";
  }
  return result;
};

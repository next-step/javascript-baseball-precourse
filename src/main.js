// pc - 정답 만들기
let answer = generateAnswer();

// 게임 상태
let gameOver = false;

// pc - 정답 생성 함수
function generateAnswer() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answerArray = [];

  for (let i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * numbers.length);
    answerArray.push(numbers[index]);
    numbers.splice(index, 1);
  }
  return answerArray;
}

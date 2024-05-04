let answer = generateRandomNumber(); // 컴퓨터가 생성한 정답
console.log('컴퓨터가 생각한 숫자:', answer);

// 1~9까지 서로 다른 임의의 3자리 수 생성
function generateRandomNumber() {
  let numbers = [];
  while (numbers.length < 3) {
    let randomNum = Math.floor(Math.random() * 9) + 1;
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers.join('');
}
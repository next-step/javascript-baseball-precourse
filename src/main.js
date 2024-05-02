// 컴퓨터가 임의의 수 3개 선택
function generateNumbers() {
  let numbers = [];

  while (numbers.length < 3) {
    let num = Math.floor(Math.random() * 9) + 1;

    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }

  return numbers;
}

const computerNumbers = generateNumbers();
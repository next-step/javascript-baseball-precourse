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

// 플레이어가 숫자를 입력했을 때 실행
function validateInput() {
  const inputField = document.getElementById('playerInput');
  const inputValue = inputField.value;
  const numbers = inputValue.split('').map(Number);
  
  // 0을 입력한 경우
  if (numbers[numbers.length - 1] === 0) {
    alert('1~9까지의 수를 입력해주세요.');
    inputField.value = inputValue.slice(0, numbers.length - 1);
    return;
  }

  // 입력 길이가 3을 초과한 경우
  if (inputValue.length > 3) {
    alert('숫자를 3개만 입력해주세요.');
    inputField.value = inputValue.slice(0, 3);
    return;
  }
  
  // 중복되는 숫자를 입력한 경우
  if (new Set(numbers).size !== numbers.length) {
    alert('중복되는 숫자가 있습니다. 다른 숫자를 입력해주세요.');
    inputField.value = inputValue.slice(0, numbers.length - 1);
    return;
  }
}

const computerNumbers = generateNumbers();

const playerInput = document.querySelector("#playerInput");
playerInput.oninput = validateInput;
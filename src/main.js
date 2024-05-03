const computerNumbers = generateNumbers();

const playerInput = document.querySelector("#playerInput");
playerInput.oninput = validateInput;

const submitBtn = document.querySelector("#submit");
submitBtn.onclick = displayResult;

const results = document.querySelector(".results");
results.style.display = "none";

const resultsList = document.querySelector(".results-list");

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

// 플레이어가 입력한 숫자와 컴퓨터가 선택한 숫자 비교
function calculateResult() {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    const input = parseInt(playerInput.value[i]);
    // 숫자와 위치 모두 일치(스트라이크)
    if (input === computerNumbers[i]) {
      strikes++;
    }
    // 숫자 일치, 위치 불일치(볼)
    else if (computerNumbers.includes(input)) {
      balls++;
    }
  }

  let resultArr = [];

  // 모두 불일치(낫싱)
  if (strikes === 0 && balls === 0) {
    return '낫싱';
  }
  else {
    if (strikes > 0) {
      resultArr.push(`${strikes}스트라이크`);
    }
    if (balls > 0) {
      resultArr.push(`${balls}볼`);
    }
  }

  return resultArr.join(' ');
}

// 화면에 결과 표시
function displayResult() {
  results.style.display = "block";
  const result = calculateResult();
  const resultItem = document.createElement('li');
  const correctAnswer = document.createElement('h4');
  correctAnswer.textContent = "🎉정답을 맞추셨습니다🎉";

  // 정답을 맞춘 경우
  if (result === "3스트라이크") {
    results.appendChild(correctAnswer);
    return;
  }
  resultItem.textContent = `${playerInput.value} : ${result}`;
  resultsList.appendChild(resultItem);
  playerInput.value = '';
}
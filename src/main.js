const playerInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');

submitBtn.addEventListener('click', displayResult);

let answer = generateNumber();



function generateNumber() {
    let numbers = '';
    while (numbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers += randomNumber;
        }
    }
    return numbers;
}


function validateInput(inputValue) {
  if (inputValue.length !== 3 || !/^[1-9]{3}$/.test(inputValue) || new Set(inputValue).size !== 3) {
    alert('중복되지 않은 1~9까지의 숫자 3개를 입력하세요.');
    return false;
  }
}



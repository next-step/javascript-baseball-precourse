const userForm = document.querySelector("#user-form");
const userFormInput = userForm.querySelector("input");

const ANSWER_MAX_LENGTH = 3;

function checkIsDuplicate(array) {
  return new Set(array).size !== array.length;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function makeAnswer() {
  const answer = [];
  while (answer.length < ANSWER_MAX_LENGTH) {
    const newNumber = getRandomNumber();
    const isDuplicate = checkIsDuplicate([...answer, newNumber]);
    if (!isDuplicate) answer.push(newNumber);
  }
  return answer;
}

function getUserInput() {
  const inputArr = userFormInput.value.split("");
  return inputArr.map((num) => parseInt(num));
}

function resetUserInput() {
  userFormInput.value = "";
}

function checkIsValidateInput(input) {
  const isValidLength = input.length === ANSWER_MAX_LENGTH;
  const isNotDuplicate = !checkIsDuplicate(input);
  const isAllNumbers = input.every((num) => !isNaN(num));

  const isValidate = isValidLength && isNotDuplicate && isAllNumbers;
  return isValidate;
}

function checkIsCorrect(answer, input) {
  const result = {
    strike: 0,
    ball: 0,
  };

  answer.forEach((num, index) => {
    if (num === input[index]) result.strike++;
    else if (answer.includes(input[index])) result.ball++;
  });

  return result;
}

function init() {
  const answer = makeAnswer();
  console.log(answer);

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = getUserInput();
    const isValidateInput = checkIsValidateInput(userInput);
    if (!isValidateInput) {
      alert("중복 없이 3자리 숫자를 입력해주세요.");
      return;
    }
    const result = checkIsCorrect(answer, userInput);
    console.log(result);

    resetUserInput();
  });
}
init();

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
    const isDuplicate = checkIsDuplicate(answer);
    if (!isDuplicate) answer.push(newNumber);
  }
  return answer;
}

function getUserInput() {
  return userFormInput.value.split("");
}

function resetUserInput() {
  userFormInput.value = "";
}

function checkIsValidateInput(input) {
  const isValidate =
    input.length !== ANSWER_MAX_LENGTH &&
    checkIsDuplicate(input) &&
    input.some((num) => isNaN(num));

  if (isValidate) return false;
  return true;
}

function checkIsCorrect(answer, input) {
  const result = {
    strike: 0,
    ball: 0,
  };

  answer.forEach((num, index) => {
    if (num === input[index]) {
      result.strike++;
    } else if (answer.includes(input[index])) {
      result.ball++;
    } else {
      result.out++;
    }
  });

  return result;
}

function init() {
  const answer = makeAnswer();
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInput = getUserInput();
    const isValidateInput = checkIsValidateInput(userInput);
    if (!isValidateInput) {
      alert("중복 없이 3자리 숫자를 입력해주세요.");
      return;
    }
    const result = checkIsCorrect(answer, userInput);
    resetUserInput();
  });
}
init();

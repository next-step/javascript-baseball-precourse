function generateRandomNumber() {
  let digits = [];

  while (digits.length < 3) {
    let randomNumber = Math.floor(Math.random() * 9) + 1;

    if (!digits.includes(randomNumber)) {
      digits.push(randomNumber);
    }
  }

  return digits;
}

function handleInput(randomNumber, userInput) {
  const userInputValue = userInput.value;

  if (validateInput(userInputValue)) {
    const result = calculateResult(randomNumber, userInputValue);
    // console.log(result);
    return result; // { strikes, balls }
  } else {
    alert("잘못된 입력입니다. 다시 입력해주세요.");
    userInput.value = "";
  }
}

function validateInput(input) {
  return /^[1-9]{3}$/.test(input) && new Set(input).size === 3;
}

function calculateResult(randomNumber, userInput) {
  const randomDigits = randomNumber;
  const userDigits = userInput.split("").map(Number);

  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < randomDigits.length; i++) {
    if (randomDigits[i] === userDigits[i]) {
      strikes++;
    } else if (randomDigits.includes(userDigits[i])) {
      balls++;
    }
  }

  return { strikes, balls };
}

// 시작
window.onload = function () {
  const randomNumber = generateRandomNumber();
  console.log("random number: ", randomNumber);
  let strikes = 0;
  let balls = 0;

  const inputButton = document.getElementById("inputbutton");
  const userInput = document.getElementById("userinput");

  // 버튼 클릭 또는 엔터 키 입력 시
  const handleInputEvent = function () {
    ({ strikes, balls } = handleInput(randomNumber, userInput));
    console.log(`strikes: ${strikes}, balls: ${balls}`);
  };

  inputButton.addEventListener("click", handleInputEvent);
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleInputEvent();
    }
  });
};

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

function handleInput(userInput) {
  const userInputValue = userInput.value;

  if (validateInput(userInputValue)) {
    // 정답인지 판단 과정 넣기
    console.log("valid");
  } else {
    alert("잘못된 입력입니다. 다시 입력해주세요.");
    userInput.value = "";
  }
}

function validateInput(input) {
  return /^[1-9]{3}$/.test(input) && new Set(input).size === 3;
}

// 시작
window.onload = function () {
  const randomNumber = generateRandomNumber();
  //   console.log(randomNumber);

  const inputButton = document.getElementById("inputbutton");
  const userInput = document.getElementById("userinput");

  inputButton.addEventListener("click", function () {
    handleInput(userInput);
  });

  // 키보드에서 엔터 키 입력
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleInput(userInput);
    }
  });
};

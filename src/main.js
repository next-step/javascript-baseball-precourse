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

// 시작
window.onload = function () {
  const randomNumber = generateRandomNumber();
  //   console.log(randomNumber);

  const inputButton = document.getElementById("inputbutton");
  inputButton.addEventListener("click", function () {
    const userInput = document.getElementById("userinput").value;
    console.log(userInput);
  });

  // 키보드에서 엔터 키 입력
  const userInput = document.getElementById("userinput");
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const userInput = document.getElementById("userinput").value;
      console.log(userInput);
    }
  });
};

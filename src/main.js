const randomProduce = () => {
  let firstNum = Math.floor(Math.random() * 10);
  //첫번째 숫자가 0이 나오지 않을 때까지 실행
  while (firstNum === 0) {
    firstNum = Math.floor(Math.random() * 10);
  }
  let secondNum = Math.floor(Math.random() * 10);
  while (firstNum === secondNum) {
    secondNum = Math.floor(Math.random() * 10);
  }
  let thirdNum = Math.floor(Math.random() * 10);
  while (firstNum === thirdNum || secondNum === thirdNum) {
    thirdNum = Math.floor(Math.random() * 10);
  }
  return [firstNum, secondNum, thirdNum];
};

let randomNum = randomProduce();

const checkNum = (random, input) => {
  let strike = 0;
  let ball = 0;
  console.log("random", random);

  input.split("").forEach((e, i) => {
    if (random.indexOf(parseInt(e)) === i) strike++;
    else if (random.includes(parseInt(e))) ball++;
  });

  return { s: strike, b: ball };
};

const checkBtn = document.querySelector(".check__btn");
checkBtn.addEventListener("click", () => {
  const inputNum = document.querySelector("input").value;
  const result = checkNum(randomNum, inputNum);
  const failMent = document.querySelector(".ment--fail");

  if (result.s === 3) {
    failMent.style.display = "none";
    document.querySelector(".ment--success").style.display = "block";
  } else {
    failMent.style.display = "block";
    failMent.textContent = `힌트: 
    ${result.b > 0 ? result.b + "볼" : ""} 
    ${result.s > 0 ? result.s + "스트라이크" : ""}
    ${result.b === 0 && result.s === 0 ? "낫싱" : ""}
    `;
  }
});

const restartBtn = document.querySelector(".restart__btn");
restartBtn.addEventListener("click", () => {
  randomNum = randomProduce();
  document.querySelector(".ment--success").style.display = "none";
  document.querySelector("input").value = "";
});

const randomProduce = () => {
  let firstNum = Math.floor(Math.random() * 10);
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
const validation = (input) => {
  const regexp = /^[0-9]{3}$/; //0~9까지 세자리 수 입력 여부
  if (!regexp.test(input)) return false;
  if (
    input.split("")[0] === input.split("")[1] ||
    input.split("")[0] === input.split("")[2] ||
    input.split("")[1] === input.split("")[2]
  )
    return false;
  return true;
};

const checkBtn = document.querySelector(".check__btn");
checkBtn.addEventListener("click", () => {
  const inputNum = document.querySelector("input").value;
  if (!validation(inputNum)) {
    alert("서로 다른 수로 이루어진 3자리 수를 입력해주세요.");
    return;
  }
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

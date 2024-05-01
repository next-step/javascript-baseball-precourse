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
  return firstNum * 100 + secondNum * 10 + thirdNum * 1;
};

console.log(randomProduce());

const checkBtn = document.querySelector(".check-btn");
checkBtn.addEventListener("click", () => {
  console.log(document.querySelector("input").value);
});

console.log(inputNum);

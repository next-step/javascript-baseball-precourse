import {
  createRandomNumber,
  inputUserNumber,
  checkResult,
  printResult,
  restartGame,
} from "./components";

const main = async () => {
  let computerNumbers = createRandomNumber();
  console.log(computerNumbers);
  let restart = true;

  const submitButton = document.getElementById("submit");
  const restartButton = document.getElementById("game-restart-button");

  restartButton.addEventListener("click", async () => {
    restart = true;
    computerNumbers = createRandomNumber();
    console.log(computerNumbers);
    restartButton.style.display = "none"; // 정답 재시작 버튼 숨기기
  });

  submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    let userNumbers = await inputUserNumber();
    console.log(userNumbers);

    if (printResult(checkResult(userNumbers, computerNumbers))) {
      restartButton.style.display = "block"; // 정답 재시작 버튼 보이기
    }
  });
};

main();

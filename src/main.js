import {
  createRandomNumber,
  inputUserNumber,
  checkResult,
  printResult,
  restartGame,
} from "./components";

const main = async () => {
  let computerNumbers = createRandomNumber();

  document
    .getElementById("game-restart-button")
    .addEventListener("click", async () => {
      computerNumbers = createRandomNumber();
      restartGame();
    });

  document.getElementById("submit").addEventListener("click", async (event) => {
    event.preventDefault();
    let userNumbers = await inputUserNumber();
    printResult(checkResult(userNumbers, computerNumbers));
  });
};

main();

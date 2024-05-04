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
  let end = false;

  document
    .getElementById("game-restart-button")
    .addEventListener("click", async () => {
      computerNumbers = createRandomNumber();
      console.log(computerNumbers);
      restartGame();
      end = false;
    });

  document.getElementById("submit").addEventListener("click", async (event) => {
    event.preventDefault();
    if (!end) {
      let userNumbers = await inputUserNumber();
      end = printResult(checkResult(userNumbers, computerNumbers));
    }
  });
};

main();

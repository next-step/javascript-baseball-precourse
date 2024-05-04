import {
  createRandomNumber,
  inputUserNumber,
  checkResult,
  printResult,
} from "./components";

const main = async () => {
  let computerNumbers = createRandomNumber();
  console.log(computerNumbers);
  let restart = true;

  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", async () => {
    event.preventDefault();
    let userNumbers = await inputUserNumber();
    console.log(userNumbers);

    do {
      let userNumbers = await inputUserNumber();
      if (printResult(checkResult(userNumbers, computerNumbers))) {
        restart = false;
        // restart = await restartGame();
        // if (restart) computerNumbers = createRandomNumber();
      }
    } while (restart);
  });
};

main();

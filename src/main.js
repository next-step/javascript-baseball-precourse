import { createRandomNumber, inputUserNumber, checkResult } from "./components";

const main = async () => {
  let computerNumber = createRandomNumber();
  console.log(computerNumber);
  let restart = true;

  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", async () => {
    event.preventDefault();
    let userNumbers = await inputUserNumber();
    console.log(userNumbers);

    let data = checkResult(userNumbers, computerNumber);
    console.log(data);
  });
};

main();

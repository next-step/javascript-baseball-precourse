import { getStrikeBall } from "./getStrikeBall";
import { setRandomNumber } from "./setRandomNumber";
import { setResult } from "./setResult";
import { setUserNumber } from "./setUserNumber";

let computer = setRandomNumber();
// console.log(computer);

export const playBaseball = () => {
  const userButton = document.getElementById("userButton");

  userButton.onclick = () => {
    const user = setUserNumber();
    if (user) {
      const { strike, ball } = getStrikeBall(computer, user);
      setResult(user, strike, ball);
      document.getElementById("userInput").value = "";
    }
  };
};

export const restartBaseball = () => {
  computer = setRandomNumber();
  console.log(computer);
  // disableInput(false)
};

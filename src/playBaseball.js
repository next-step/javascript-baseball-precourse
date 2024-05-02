import { disableInput } from "./disableInput";
import { getStrikeBall } from "./getStrikeBall";
import { setRandomNumber } from "./setRandomNumber";
import { setResult } from "./setResult";
import { getUserNumber } from "./getUserNumber";

let computer = setRandomNumber();
console.log(computer);

/** 클라이언트 숫자의 유효성을 검사한 후 야구 게임의 결과를 출력한다.*/
const playBaseball = () => {
  const user = getUserNumber();
  if (user) {
    const { strike, ball } = getStrikeBall(computer, user);
    setResult(user, strike, ball);
    document.getElementById("userInput").value = "";
  }
};

/** 클라이언트가 form을 제출하면 야구 게임을 진행한다. */
export const getUserInput = () => {
  const userButton = document.getElementById("userButton");
  userButton.addEventListener("click", playBaseball);
};

/** 새로운 컴퓨터 수를 설정한다. */
export const restartBaseball = () => {
  computer = setRandomNumber();
  console.log(computer);
  disableInput(false);
};

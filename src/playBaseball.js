import { disableInput, resetInput } from "./controlUserInput";
import { getComputerNumber } from "./getComputerNumber";
import { getUserNumber } from "./getUserNumber";
import { setResult } from "./setResult";

let computer = getComputerNumber();
console.log("시작", computer);

/** 컴퓨터 수와 클라이언트 수를 비교해 strike와 ball을 리턴 
 * @param {number[]} computer 
 * @param {number[]} user
 * @returns {{strike: number, ball: number}}
*/
const getStrikeBall = (computer, user) => {
  let strike = 0;
  let ball = 0;

  user.forEach((curNum, index) => {
    if (curNum === computer[index]) {
      strike += 1;
    } else if (computer.includes(curNum)) {
      ball += 1;
    }
  });

  return { strike, ball };
};

/** 클라이언트 숫자의 유효성을 검사한 후 야구 게임의 결과를 출력한다.*/
export const playBaseball = () => {
  const user = getUserNumber();
  if (user) {
    const { strike, ball } = getStrikeBall(computer, user);
    setResult(user, strike, ball);
    resetInput();
  }
};

/** 새로운 컴퓨터 수를 설정한다. */
export const restartBaseball = () => {
  computer = getComputerNumber();
  console.log("재시작", computer);
  disableInput(false);
};

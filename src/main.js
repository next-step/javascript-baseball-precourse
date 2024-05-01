import { setRandomNumber } from "./setRandomNumber";
import { limitInputLength } from "./limitInputLength";
import { setUserNumber } from "./setUserNumber";
import { playBaseball } from "./playBaseball";

/** 컴퓨터가 랜덤 수 생성*/
const computer = setRandomNumber();

/** 클라이언트로부터 3자리 수 입력 받기 */
limitInputLength();

/** 엔터 입력 시 새로고침 방지 */
const form = document.getElementById("play")
form.addEventListener("submit", (e) => e.preventDefault());

/** 클라이언트 숫자 유효성 검사 */
const userButton = document.getElementById("userButton")
userButton.addEventListener("click", () => {
  const user = setUserNumber();
  if (user) {
    /** 숫자 야구 게임 시작 */
    playBaseball(computer, user);
    document.getElementById("userInput").value = "";
  }
});

import { status } from "./checkInputValue.js";

export let user_input = "";

export const userInput = () => {
  const getInput = document.querySelector(".user-input").value;

  user_input = getInput;
  console.log(user_input);
  if (user_input == "") {
    alert("값을 입력하시오.");
    return userInput;
  }
  if (
    user_input.length > 3 ||
    (user_input.length < 3 && user_input.length > 0)
  ) {
    alert("3자리 숫자를 입력하세요.");
    return userInput;
  } else if (user_input.match(/\D/)) {
    alert("숫자만 입력하세요.");
    return userInput;
  } else if (
    user_input[0] == user_input[1] ||
    user_input[0] == user_input[2] ||
    user_input[1] == user_input[2]
  ) {
    alert("서로 다른 3개의 숫자를 입력하세요.");
    return userInput;
  } else if (user_input.includes("0")) {
    // 0 포함하는 경우 제외
    alert("0은 포함할 수 없습니다.");
    return userInput;
  }
  status();
};

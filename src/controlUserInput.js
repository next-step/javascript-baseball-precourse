const userInput = document.getElementById("number__input");
/** 클라이언트의 입력을 최대 3글자로 제한한다. */
export const limitInputLength = () => {
  userInput.addEventListener("input", () => {
    const curInput = userInput.value;
    if (curInput.length > 3) {
      userInput.value = curInput.substr(0, 3);
    }
  });
};

/** 클라이언트가 엔터 입력시 새로고침을 방지한다. */
export const preventRefresh = () => {
  const form = document.getElementById("number__form");
  form.addEventListener("submit", (e) => e.preventDefault());
};

/** 정답 시 추가적인 입력을 막는다. 게임 재시작 시 입력을 다시 허용한다.
 * @param {boolean} disable ture: 입력 막기, false: 입력 허용
 */
export const disableInput = (disable) => {
  userInput.disabled = disable;
};

export const resetInput = () => {
  userInput.value = "";
}
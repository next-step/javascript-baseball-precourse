/** 정답 시 추가적인 입력을 막는다. 게임 재시작 시 입력을 다시 허용한다.
 * @param {boolean} disable ture: 입력 막기, false: 입력 허용
 */
export const disableInput = (disable) => {
  const userInput = document.getElementById("userInput");
  userInput.disabled = disable;
};

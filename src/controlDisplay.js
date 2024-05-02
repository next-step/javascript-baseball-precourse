/** 게임 결과 메세지의 값과 display 속성 값을 설정한다.
 * @param {string|undefined} message 결과 메세지
 * @param {string} displayAttrib display 속성 값
*/
export const displayResultMessage = (message, displayAttrib) => {
  const result = document.getElementById("result");
  const resultMessage = document.getElementById("result__message");
  result.style.display = displayAttrib;
  resultMessage.textContent = message;
};

/** 재시작 버튼의 display 속성 값을 설정한다.
 * @param {string} displayAttrib display 속성값
 */
export const displayRestartButton = (displayAttrib) => {
  const restart = document.getElementById("restart");
  restart.style.display = displayAttrib;
};

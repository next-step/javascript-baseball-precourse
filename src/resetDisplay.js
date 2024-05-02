/** 게임 결과 메세지, 재시작 버튼을 화면에서 없앤다. */
export const resetDisplay = () => {
  const restart = document.getElementById("restart");
  const result = document.getElementById("result");

  restart.style.display = "none";
  result.style.display = "none";
};

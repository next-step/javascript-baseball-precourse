// 게임 재시작 함수
export const reGame = document.querySelector(".restart");
export const quitGame = document.querySelector(".quit");

export const goodGame = () => {
  // 버튼 누를 시 페이지 새로고침
  reGame.addEventListener("click", reload);
  function reload() {
    location.reload(true);
  }
  // 버튼 누를 시 페이지 무효화
  quitGame.addEventListener("click", quit);
  function quit() {
    const kill = document.querySelector("button");
    kill.disabled = true;
  }
};

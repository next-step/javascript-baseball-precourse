/** 클라이언트가 엔터 입력시 새로고침을 방지한다. */
export const preventRefresh = () => {
  const form = document.getElementById("play");
  form.addEventListener("submit", (e) => e.preventDefault());
};

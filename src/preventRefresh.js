export const preventRefresh = () => {
  const form = document.getElementById("play");
  form.addEventListener("submit", (e) => e.preventDefault());
};

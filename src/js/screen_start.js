const handleStartGame = (onStartGame) => {
  return () => {
    const startScreen = document.getElementById("screen--start");
    startScreen.style.display = "none";
    onStartGame();
  };
};

const init_screen_start = (onStartGame) => {
  const startScreen = document.getElementById("screen--start");
  startScreen.style.display = "flex";

  const startBtn = document.getElementById("screen--start__btn");
  startBtn.addEventListener("click", handleStartGame(onStartGame));
};

export { init_screen_start };

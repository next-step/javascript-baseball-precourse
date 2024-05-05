const init_screen_game = () => {
  const screen_game = document.getElementById("screen--game");
  screen_game.style.display = "none";
};

const onStartGame = () => {
  const screen_game = document.getElementById("screen--game");
  screen_game.style.display = "flex";
};

export { init_screen_game, onStartGame };

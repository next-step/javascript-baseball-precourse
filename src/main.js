import { init_screen_start, restart } from "./js/screen_start";
import { init_screen_game, onStartGame } from "./js/screen_game";

const init = () => {
  init_screen_start(onStartGame);
  init_screen_game(restart);
};

init();

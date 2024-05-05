import { init_answer_input, start_input } from "./answer_input";

const usage_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let _answer = [];
let _problem = [];
let _logs = [];
let _require_number = [];
let _exclude_number = [];

const generateProblem = () => {
  _answer = [];
  _problem = usage_numbers.sort(() => Math.random() - 0.5).slice(0, 4);
  _logs = [];
  _require_number = [];
  _exclude_number = [];
};

const init_screen_game = () => {
  const screen_game = document.getElementById("screen--game");
  screen_game.style.display = "none";

  const answer_input = document.getElementById("screen--game__input");
  init_answer_input(answer_input, () => {});
};

const onStartGame = () => {
  const screen_game = document.getElementById("screen--game");
  screen_game.style.display = "flex";

  generateProblem();

  start_input();
};

export { init_screen_game, onStartGame };

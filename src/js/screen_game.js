import { init_answer_input, start_input } from "./answer_input";
import { init_game_log, reset_game_log, rendering_log } from "./game_log";
import {
  init_game_tip,
  setRequire,
  setExclude,
  resetAllTips,
} from "./game_tip";

const usage_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let _answer = [];
let _problem = [];

const generateProblem = () => {
  _answer = [];
  _problem = usage_numbers.sort(() => Math.random() - 0.5).slice(0, 3);
  console.log(_problem);
};

const getStrikeCount = (answer) => {
  return answer.filter((num, index) => _problem[index] === num).length;
};

const getBallCount = (answer) => {
  return answer.filter((num) => _problem.includes(num)).length;
};

const getAnswerResult = (answer) => {
  const strike = getStrikeCount(answer);
  const ball = getBallCount(answer) - strike;
  return { strike, ball };
};

const excludeAnswer = (answer) => {
  for (const num of answer) {
    setExclude(num);
  }
};

const requireAnswer = (answer) => {
  for (const num of answer) {
    setRequire(num);
  }
};

const onEndInput = (answer) => {
  const { strike, ball } = getAnswerResult(answer);

  if (strike + ball === 0) excludeAnswer(answer);
  else if (strike + ball === 3) requireAnswer(answer);

  rendering_log({ answer, strike, ball });
  start_input();
};

const init_screen_game = () => {
  const screen_game = document.getElementById("screen--game");
  screen_game.style.display = "none";

  const answer_input = document.getElementById("screen--game__input");
  init_answer_input(answer_input, onEndInput);

  const log_table = document.getElementById("screen--game__logs");
  init_game_log(log_table);

  const game_tip = document.getElementById("screen--game__tip");
  init_game_tip(game_tip, usage_numbers);
};

const onStartGame = () => {
  const screen_game = document.getElementById("screen--game");
  screen_game.style.display = "flex";

  generateProblem();

  start_input();

  reset_game_log();

  resetAllTips();
};

export { init_screen_game, onStartGame };

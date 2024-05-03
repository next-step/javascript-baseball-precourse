import Computer from './computer.js';

let com = new Computer();

/**
 *
 * @param {int[]} userInput
 * @return {int[]}
 */
function getStrikeBallCount(userInput) {
  let strikes = 0;
  let balls = 0;
  userInput.forEach((value, index, _) => {
    if(! com.existsInAnswer(value)) return;

    strikes += com.isStrike(value, index) ? 1 : 0;
    balls += com.isStrike(value, index) ? 0 : 1;
  });

  return [strikes, balls];
}

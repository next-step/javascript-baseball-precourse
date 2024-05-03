import Computer from './computer.js';

let com = new Computer();

/**
 *
 * @param {string} userInput
 * @return {int[]}
 */
function getStrikeBallCount(userInput) {
  const inputArray = [...userInput];
  let strikes = 0;
  let balls = 0;
  inputArray.forEach((value, index, _) => {
    value = parseInt(value)
    if(! com.existsInAnswer(value)) return;

    strikes += com.isStrike(value, index) ? 1 : 0;
    balls += com.isStrike(value, index) ? 0 : 1;
  });

  return [strikes, balls];
}

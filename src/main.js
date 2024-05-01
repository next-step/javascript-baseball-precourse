const ANSWER_MAX_LENGTH = 3;

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function makeAnswer() {
  const answer = [];
  while (answer.length < ANSWER_MAX_LENGTH) {
    const number = getRandomNumber();
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
  return answer;
}

function init() {
  const answer = makeAnswer();
}
init();

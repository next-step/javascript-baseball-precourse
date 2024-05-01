export function checkIsCorrect(answer, input) {
  const result = {
    strike: 0,
    ball: 0,
  };

  answer.forEach((num, index) => {
    if (num === input[index]) result.strike++;
    else if (answer.includes(input[index])) result.ball++;
  });

  return result;
}

export function checkIsCorrect(answer, input) {
  const result = {
    strike: 0,
    ball: 0,
  };
  answer.forEach((num, index) => {
    if (!input.includes(num)) return;
    if (num === input[index]) result.strike++;
    else result.ball++;
  });
  return result;
}

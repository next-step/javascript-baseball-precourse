export const compareNumber = (userNum, computerNum) => {
  let strike = [0];
  let ball = [0];

  userNum.forEach((user, userIndex) => {
    isStrikeOrBall(user, userIndex, computerNum,strike,ball)
  })
  return { strike, ball };
}

const isStrikeOrBall = (user, userIndex, computerNum,strike,ball) => {
  computerNum.forEach((computer, index) => {
    if (user === computer && userIndex === index) strike[0]++;
    else if (user === computer) ball[0]++;
  })
}
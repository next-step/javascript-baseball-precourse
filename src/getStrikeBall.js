/** 컴퓨터 수와 클라이언트 수를 비교해 strike와 ball을 리턴 */
export const getStrikeBall = (computer, user) => {
  let strike = 0;
  let ball = 0;

  user.forEach((curNum, index) => {
    if (curNum === computer[index]) {
      strike += 1;
    } else if (computer.includes(curNum)) {
      ball += 1;
    }
  });

  return { strike, ball };
};

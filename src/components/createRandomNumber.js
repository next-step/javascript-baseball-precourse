export const createRandomNumber = () => {
  /* 랜덤으로 상대방(컴퓨터)의 수를 설정하는 기능 */
  const computer = [];
  while (computer.length < 3) {
    const number = Math.floor(Math.random() * 9) + 1; // 1부터 9까지의 난수 생성
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

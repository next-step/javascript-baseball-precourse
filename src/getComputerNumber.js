/** 랜덤으로 중복이 없는 3자리 수를 뽑는다.
 * @returns {number[]} 랜덤으로 생성된 컴퓨터 수
 */
export const getComputerNumber = () => {
  const num = new Set();
  while (num.size < 3) {
    const cur_num = Math.floor(Math.random() * 10);
    if (!num.has(cur_num)) {
      num.add(cur_num);
    }
  }

  return [...num];
};

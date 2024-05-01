export const pickNum = () => {
  // 1~9 사이의 서로 다른 숫자 3개를 뽑는 함수
  let answer = Math.floor(Math.random() * 900) + 100;
  answer = answer.toString();
  return answer;
};

export const numCheck = (num) => {
  if (num[0] == num[1] || num[1] == num[2] || num[2] == num[0]) {
    return false;
  }
  if (num[0] == 0 || num[1] == 0 || num[2] == 0) {
    return false;
  }
  return true;
};

export default function generateNumber() {
  let availableNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = "";
  for (let i = 0; i < 3; i++) {
    const randomIdx = Math.floor(Math.random() * availableNums.length);
    result += availableNums[randomIdx];
    availableNums.splice(randomIdx, 1); // 선택한 숫자를 배열에서 제거해 중복 방지
  }
  return result;
}

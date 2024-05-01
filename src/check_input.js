export function checkInput(num, lastNum) {
  // 사용자가 입력한 숫자가 중복되는지 확인하는 함수
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] == lastNum) {
      alert("중복된 숫자입니다. 다시 입력해주세요.");
      console.log(num.slice(0, -1));
      return num.slice(0, -1);
    }
  }
  return num;
}

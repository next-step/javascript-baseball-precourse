// 사용자가 잘못된 값을 입력할 경우 에러메세지를 출력하는 함수
function validateInput(input) {
  if (input.length !== 3) return false;
  const numbers = input.split("").map(Number);
  return numbers.every((num, index) => {
    return !isNaN(num) && num >= 1 && num <= 9 && numbers.indexOf(num) === index;
  });
}
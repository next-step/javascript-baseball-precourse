//숫자 체크 해주는 함수 입력 잘못되었으면 alert
export default function checknumber(number) {
  if (!isNaN(number)) {
    // 입력된 값이 숫자일 경우
    if (number.length !== 3) {
      alert("3자리 숫자를 입력해주세요");
      numberchecking = !numberchecking;
    }
  } else {
    // 입력된 값이 숫자가 아닐 경우
    alert("숫자를 입력해주세요");
    numberchecking = !numberchecking;
  }
}

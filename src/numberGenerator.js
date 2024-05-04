//랜덤한 3자리 수 생성
export default function generateRandomNumber() {
  let randomNum = [];

  // 중복되지 않는 3자리 숫자 생성
  while (randomNum.length < 3) {
    const random = Math.floor(Math.random() * 9) + 1; // 1부터 9까지의 랜덤한 숫자 생성
    if (!randomNum.includes(random)) {
      // 배열에 중복되지 않는 숫자인지 확인
      randomNum.push(random); // 중복되지 않는 숫자라면 배열에 추가
    }
  }
  return randomNum;
  //return numbers.join(""); // 배열의 숫자를 문자열로 합쳐서 반환
}

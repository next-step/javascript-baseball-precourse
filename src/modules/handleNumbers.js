// 컴퓨터 랜덤 숫자를 반환하는 함수
function createRandomNumbers() {
  const computerNumbers = []; // 숫자를 담을 배열 생성
  while (computerNumbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    if (!computerNumbers.includes(randomNumber)) {
      // 해당 숫자가 없으면
      computerNumbers.push(randomNumber); // 추가해준다
    }
  }
  return computerNumbers;
}

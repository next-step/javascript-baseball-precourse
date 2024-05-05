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

function getPlayerNumbers() {
  const playerNumbers = document
    .getElementById("playerInput")
    .value.split("")
    .map(Number); //map형식
  //입력이 유효한지 판단 -> 3자리 수가 아니거나 중복된 숫자가 있는 경우 alert
  if (playerNumbers.length !== 3 || new Set(playerNumbers).size !== 3) {
    alert("잘못된 입력입니다. 1에서 9까지 서로 다른 3개의 숫자를 입력하세요.");
    return null;
  }
  return playerNumbers;
}

export { createRandomNumbers, getPlayerNumbers };

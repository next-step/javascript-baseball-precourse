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

//플레이어vs컴퓨터 숫자 비교
function compareNumbers(playerNumbers, computerNumbers) {
  //비교 후 힌트 제공
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (playerNumbers[i] === computerNumbers[i]) {
      //같은 수가 같은 자리에 있는 경우
      strike++;
    } else if (computerNumbers.includes(playerNumbers[i])) {
      // 다른 자리에 있는 경우
      ball++;
    }
  }

  if (strike === 0 && ball === 0) {
    //같은 수가 전혀 없는 경우
    return "낫싱";
  }

  return { strike, ball };
}

export { getPlayerNumbers, createRandomNumbers, compareNumbers };

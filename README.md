# ⚾Javascript-baseball-precourse

JS를 사용한 숫자 야구 게임 프로그램 구현

## 📆진행 기간

2024.05.03~2024.05.05

## ✏️Commit Message Convention

angular JS commit convention
https://gist.github.com/stephenparish/9941e89d80e2bc58a153

## 💥기능 목록

- 숫자 야구 게임 view
- 플레이어 입력값 유효성 판단
- 플레이어와 컴퓨터 숫자 비교 후 힌트 기능
- 게임 시작, 결과 출력 기능
- 게임 재시작 기능
- 게임 종료 기능

## src 폴더 구조

```
📦src
 ┣ 📂modules
 ┃ ┣ 📜handleGame.js
 ┃ ┗ 📜handleNumbers.js
 ┗ 📜main.js
```

### handleNumber.js

숫자를 다루는 function의 집합

- **createRandomNumbers**:
  컴퓨터 랜덤 숫자를 반환하는 함수

```js
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
```

- **getPlayerNumbers**:
  플레이어의 입력 숫자를 get 해오는 함수

```js
function getPlayerNumbers() {
  const playerInput = document.getElementById("playerInput").value;
  const playerNumbers = playerInput.split("").map(Number);

  if (!playerInput.match(/^\d+$/)) {
    alert("숫자를 입력하세요.");
    return null;
  }
  //입력이 유효한지 판단 -> 3자리 수가 아니거나 중복된 숫자가 있는 경우 alert
  if (
    playerNumbers.length !== 3 ||
    new Set(playerNumbers).size !== 3 ||
    new Set(playerNumbers).has(0)
  ) {
    alert("잘못된 입력입니다. 1에서 9까지 서로 다른 3개의 숫자를 입력하세요.");
    return null;
  }
  return playerNumbers;
}
```

- **compareNumbers**:
  플레이어의 숫자와 상대방(컴퓨터) 숫자 비교 후 힌트 제공

```js
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
```

### handleGame.js

- **restartGame**: 게임 재시작 기능
- **endGame**: 게임 종료 기능

```js
function restartGame() {
  window.location.reload();
}
function endGame() {
  const confirmEnd = confirm("게임을 종료하시겠습니까?");
  if (confirmEnd) {
    window.location.reload();
  } else {
    return;
  }
}

export { restartGame, endGame };
```

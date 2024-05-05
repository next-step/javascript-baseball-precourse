# javascript-baseball-precourse

### main.js
```javascript
import generateRandomNumber from "./generateRandomNumber";
import {calculateBalls as calBalls,calculateStrikes as calStrikes,} from "./calculateResult";
import isValidInput from "./invalidCheck";

document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("userInput");
  const checkBtn = document.getElementById("checkBtn");
  const resultMessage = document.getElementById("resultMessage");
  const restartSection = document.getElementById("restartSection");
  const restartBtn = document.getElementById("restartBtn");
  // 랜덤한 숫자를 생성하여 targetNumber 변수에 저장합니다.
  let targetNumber = generateRandomNumber();

  checkBtn.addEventListener("click", function () {
    const input = userInput.value.trim();
    if (!isValidInput(input)) {
      alert(
        "잘못된 입력입니다. 1부터 9까지 서로 다른 3자리 숫자를 입력하세요."
      );
      return;
    }

    const strikes = calStrikes(input, targetNumber);
    const balls = calBalls(input, targetNumber);

    if (strikes === 3) {
      resultMessage.innerText = "🎉 정답을 맞추셨습니다! 🎉";
      restartSection.style.display = "block";
    } else if (strikes === 0 && balls === 0) {
      // 낫싱
      resultMessage.innerText = "낫싱";
      restartSection.style.display = "none";
    } else {
      resultMessage.innerText = `${balls}볼 ${strikes}스트라이크`;
      restartSection.style.display = "none";
    }
  });

  restartBtn.addEventListener("click", function () {
    targetNumber = generateRandomNumber();
    userInput.value = "";
    resultMessage.innerText = "";
    restartSection.style.display = "none";
  });
});
```

- main.js 입니다.
- 분리된 기능 모듈을 import 합니다.
- generateRandomNumber() 로 랜덤한 숫자를 생성합니다.
- 이벤트리스너를 통해, 확인 버튼을 눌렀을 때, 사용자의 입력 값을 가져와 앞 뒤 공백을 제거하고, 입력 값이 유효한 지 확인합니다.
- 또한, 입력 값과 타겟 값을 비교하여 스트라이크, 볼 개수를 계산하고 그에 따라 화면을 표시합니다.

- 이벤트리스너를 통해, 게임 재시작 버튼을 눌렀을 때, 랜덤한 숫자를 다시 생성해 변수에 저장하고
- 사용자의 입력창과 결과 메세지를 초기화하며
- 재시작 버튼을 포함한 restartSection 을 숨깁니다.
  
### generateRandomNumber.js
```javascript
export default function generateRandomNumber() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * numbers.length);
      result.push(numbers[index]);
      numbers.splice(index, 1);
    }
    return result.join("");
}
```
- 랜덤한 숫자 3자리를 생성하는 기능입니다.
- for 반복문에서, numbers 배열의 random 한 index 위치를 저장하고
- result 에 push 합니다.
- splice 를 이용해 index 위치부터 1개의 원소를 삭제합니다. (뽑은 숫자 삭제, 중복 방지)
- result 배열의 숫자를 문자열로 결합하여 반환합니다.

### calculateResult.js
```javascript
export function calculateStrikes(input, target) {
  let strikes = 0;
  for (let i = 0; i < 3; i++) {
    if (input[i] === target[i]) {
      strikes++;
    }
  }
  return strikes;
}

export function calculateBalls(input, target) {
  let balls = 0;
  for (let i = 0; i < 3; i++) {
    if (input[i] !== target[i] && target.includes(input[i])) {
      balls++;
    }
  }
  return balls;
}

```
- 사용자가 입력한 숫자에 대해, strike 인지 ball 인지 판별하는 기능입니다.
- strike 의 경우, 위치까지 동일하다면, strike++ 로 수를 증가시켜 그 개수를 반환합니다.
- ball 의 경우, 위치가 다르면서 동시에 target 원소가 포함되어 있다면 ball++ 후 개수를 반환합니다.

### invalidCheck.js
```javascript
  export default function isValidInput(input) {
  return /^[1-9]{3}$/.test(input);
}
```
- 사용자가 잘못된 입력 값을 넣었는 지 판별하는 기능입니다.
- 정규표현식을 사용하여, 1-9 까지의 숫자로 이루어진 3자리인지 검사합니다.


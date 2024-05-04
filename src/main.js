let input = document.getElementById('input');
const checkButton = document.getElementById('check');
checkButton.addEventListener('click', check);
const result = document.getElementById('result');
const restartQ = document.getElementById('restartQ');
const restartBtn = document.getElementById('restartBtn');
restartBtn.addEventListener('click', setting);

let set;
setting();

// 게임 초기화 및 시작 함수
function setting() {
  set = []; // 랜덤 난수 담을 배열

  while (set.length < 3) {
    const rand = Math.floor(Math.random() * 9) + 1;
    if (!set.includes(rand)) {
      set.push(rand);
    }
  }
  console.log(set);

  result.textContent = '';
  restartQ.style.display = 'none';
  input.value = '';
}


function check() {
  
  let inputValue = input.value;
  let inputArr = inputValue.toString().split('').map(Number);
  console.log(inputValue);
  console.log(inputArr);

  if (checkValid(inputArr)) {
    console.log("유효한 입력")

    // 스트라이크, 볼, 낫싱 체크
    const { strike, ball, nothing } = checkResult(inputArr, set);
    console.log(strike, "스트라이크 ", ball, "볼 ", nothing, "낫싱");

    // 정답 처리 (3 스트라이크)
    if (strike === 3) {
      result.textContent = "🎉 정답을 맞추셨습니다 🎉"
      restartQ.style.display = 'block';
    } else {
      result.textContent = `${strike} 스트라이크 ${ball} 볼 ${nothing} 낫싱`;
    }
  }

}


function checkValid(inputArr) {
  // 입력 숫자가 3개 맞는지 검사
  if (inputArr.length !== 3) {
    alert("숫자를 3개 입력해주세요");
    return false;
  }

  // 중복 숫자 검사
  let inputSet = new Set(inputArr);
  if(inputSet.size !== 3) {
    alert("1부터 9까지의 숫자를 중복 없이 3개 입력해주세요");
    return false;
  }

  return true;
}


function checkResult(inputArr, set) {
  let strike = 0;
  let ball = 0;
  let nothing = 0;

  for (let i=0; i<3; i++) {
    if (inputArr[i] === set[i]) {
      strike++;
    } else if (set.includes(inputArr[i])) {
      ball++;
    } else {
      nothing++;
    }
  }

  return { strike, ball, nothing };

}

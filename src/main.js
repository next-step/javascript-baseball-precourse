//랜덤 숫자 생성
const numbers = Array(9).fill().map((item, index) => index + 1);
const random = [];
function createRandomNum() {
  random.length = 0;
  for(var i=0; i<3; i++) {
    const num = Math.floor(Math.random() * numbers.length);
    const newArr = numbers.splice(num, 1);
    const val = newArr[0];
    random.push(String(val));
  }
}
createRandomNum()
console.log(random);


// 야구게임 시작
function checkNum() {
	const inputNum = document.querySelector('.search input').value;
	var checkVal = checkValue(inputNum);
	if (checkVal) {
		ballOrStrike (inputNum)
	}
	else {
		document.querySelector('.search input').focus();
	}
}
 // 입력 범위 확인
function checkValue(inputNum) {
  if(inputNum == null || inputNum.length !== 3) {
    alert(`3자리를 입력해주세요.`);
    return false;
  } else if(inputNum < '0' || inputNum >= '999') {
    alert(`숫자만 입력해야 합니다.`);
    return false;
  } else if(new Set(inputNum).size !== 3) {
    alert('중복없이 입력해주세요.');
    return false;
  }
  return true;
}

// 숫자 입력 결과 확인
function createResult(ball, strike) {
  var resultText = '';
  if (strike === 0 && ball >0)
    resultText = `${ball}볼`
  else if (strike > 0 && ball === 0)
    resultText = `${strike}스트라이크`
  else if (ball > 0 || strike > 0)
    resultText = `${ball}볼 ${strike}스트라이크`
  else 
    resultText = '낫싱';
  return resultText
}
// 볼 or 스트라이크 판별
const correct = document.querySelector('.result-correct');
function ballOrStrike (inputNum) {
  var res ='';
  var strike = 0;
  var ball = 0;
  inputNum.split('').forEach((num, index) => {
    if (random.indexOf(num) === index)
      strike++;
    else if (random.includes(num))
      ball++;
  })
  res = createResult(ball, strike)
  console.log(document.querySelector('.result-hint').textContent = res);
	
	if (strike === 3) {
    correct.classList.add('block');
  } else {
    correct.classList.remove('block');
  }
}

// 재시작
const restartBtn = document.querySelector('.restart');
restartBtn.addEventListener('click', function () {
  window.location.reload()
})
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
		//strike 판별 로직
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


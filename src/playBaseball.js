export const playBaseball = () => {
	const inputNum = document.querySelector('.search input').value;
	var checkVal = checkValue(inputNum);

	if (checkVal) {
		//볼 스트라이크 판정 로직
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
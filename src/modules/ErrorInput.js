export const digits = [];

export const ErrorInput = (number) => {
	// 입력받은 숫자가 3개 보다 적거나 많을때
	if (number.length === 0 || number.length < 3) {
		alert('숫자 3개를 입력해주세요.');
	} else if (number.length > 3) {
		alert('숫자 3개만 입력해주세요.');
		return false;
	}
	// // 숫자를 유사배열객체인 문자열로 변경
	const str_input = String(number);

	// // 배열의 모든 element를 숫자로 변경
	const mapfn = (element) => Number(element);

	// // 문자열을 배열로 변경 - split()
	// // 배열의 모든 element를 숫자로 변경 - map()
	const arr_input = str_input.split('').map(mapfn);
	console.log(arr_input);

	for (let i = 0; i < arr_input.length - 1; i++) {
		if (
			arr_input.indexOf(arr_input[i]) !== arr_input.lastIndexOf(arr_input[i])
		) {
			alert('중복된 숫자가 있습니다.');
			return false;
		}
	}
};

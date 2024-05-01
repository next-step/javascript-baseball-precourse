import { CheckNumber } from './CheckNumber.js';

export let userInput = '';

export const InputNumber = (event) => {
	event.preventDefault();

	const input = document.getElementById('submit-input');
	userInput = input.value;

	const digits = [];
	digits.push(userInput.split(''));

	// // 숫자를 유사배열객체인 문자열로 변경
	// const str_input = String(userInput);

	// // 배열의 모든 element를 숫자로 변경
	// const mapfn = (element) => Number(element);

	// // 문자열을 배열로 변경 - split()
	// // 배열의 모든 element를 숫자로 변경 - map()
	// arr_input = str_input.split('').map(mapfn);
	// console.log(digits);
	CheckNumber();
};

// console.log(userNumber);

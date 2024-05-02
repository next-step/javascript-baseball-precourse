import { CheckNumber } from './CheckNumber.js';
import { ErrorInput } from './ErrorInput.js';

export let userInput = '';

export const InputNumber = (event) => {
	event.preventDefault();

	const input = document.getElementById('submit-input');
	userInput = input.value;

	if (ErrorInput(userInput) === false) {
		userInput = '';
	} else {
		CheckNumber();
	}
};

// console.log(userNumber);

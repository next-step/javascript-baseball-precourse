import { result } from './CheckNumber.js';

export const ResultGame = () => {
	const display = document.getElementById('gameResult');
	display.textContent = result;
};

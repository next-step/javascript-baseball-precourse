import { EndGameBtn } from './EndGame.js';
import { userInput } from './InputNumber.js';
import { computerNumber } from './RandomNumber.js';
import { RestartBtn, RestartMsg } from './RestartGame.js';
import { ResultGame } from './ResultGame.js';

export let result = 0;

export const CheckNumber = () => {
	let strike = 0;
	let ball = 0;

	for (let i = 0; i < 3; i++) {
		if (computerNumber[i] === Number(userInput[i])) {
			strike++;
		} else if (computerNumber.includes(Number(userInput[i]))) {
			ball++;
		}
	}

	if (strike == 3) {
		result = '🎉정답을 맞추셨습니다🎉';
		ResultGame();
		RestartMsg();
		RestartBtn();
		EndGameBtn();
	} else if (strike > 0 || ball > 0) {
		result = `${strike} 스트라이크 ${ball} 볼`;
		ResultGame();
	} else {
		result = '낫싱';
		ResultGame();
	}
};

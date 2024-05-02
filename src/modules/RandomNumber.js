import { overLapCheck } from './OverLapCheck.js';

export let computerNumber = [];

export const RandomNumber = () => {
	computerNumber.length = 0;
	// 1 ~ 9 까지의 랜덤 숫자 생성

	computerNumber = Array.from({ length: 3 }, () =>
		Math.floor(Math.random() * 9 + 1)
	);

	// 중복된 숫자가 있는지 확인
	if (overLapCheck(computerNumber)) {
		RandomNumber();
	}
};

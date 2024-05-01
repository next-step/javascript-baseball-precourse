export let computerNumber = [];

export const RandomNumber = () => {
	computerNumber.length = 0;
	// 1 ~ 9 까지의 랜덤 숫자 생성

	for (let i = 0; i < 3; i++) {
		const number = Math.floor(Math.random() * 9 + 1);
		computerNumber.push(number);
	}

	// computerNumber = Array.from({ length: 3 }, () =>
	// 	Math.floor(Math.random() * 9 + 1)
	// );

	// console.log(computerNumber);
	// return computerNumber;
};

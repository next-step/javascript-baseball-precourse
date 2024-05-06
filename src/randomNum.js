export function randomNum() {
	let arr = [];
		while(arr.length < 3) {
			let num = Math.floor(Math.random() * 10);
			if (!arr.includes(num)) {
				arr.push(num);
			}
		}
	return arr.join('');
}
export default function randomNum() {
	let arr = [];
		while(arr.length < 3) {
			let num = Math.floor(Math.random() * 9) + 1;
			if (!arr.includes(num)) {
				arr.push(num);
			}
		}
	return arr;
}
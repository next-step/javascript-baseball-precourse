export const overLapCheck = (number) => {
	for (const val of number) {
		if (number.indexOf(val) !== number.lastIndexOf(val)) {
			return true;
		}
	}
};

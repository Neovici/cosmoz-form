/* eslint-disable radix */
const double = (digit: string) => {
	const double = parseInt(digit) * 2;
	return double > 9 ? double - 9 : double;
};

export const luhn = (str: string) => {
	const _str = str.replace(/-/giu, '');

	if (!/^[0-9]+$/u.test(_str) || _str.length === 0) {
		return false;
	}

	const sum = _str
		.split('')
		.reverse()
		.reduce(
			(acc, digit, index) =>
				acc + Number(index % 2 === 0 ? digit : double(digit)),
			0
		);

	return sum % 10 === 0;
};

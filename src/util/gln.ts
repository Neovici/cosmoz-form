/* eslint-disable radix */
export const gln = (str: string) => {
	if (!/^[0-9]+$/u.test(str) || str.length !== 13) {
		return false;
	}

	const sum = str.split('')
		.reduce((sum, digit, index) =>
			index % 2 === 0
				? sum + 1 * parseInt(digit)
				: sum + 3 * parseInt(digit)
		, 0);

	return sum % 10 === 0;
};

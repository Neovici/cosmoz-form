export const ensureNumber = <T>(n: T): number =>
	Number.isNaN(n) || typeof n !== 'number' ? 0 : n;

export const TOUCHED: unique symbol = Symbol('touched');
export type Touchable = { [TOUCHED]?: boolean };

export function touch<T>(_obj: T, touched?: boolean): T;
export function touch<T>(_obj: T | undefined, touched?: boolean): T | undefined;
export function touch<T>(_obj?: T, touched: boolean = true) {
	if (_obj == null) return;
	const obj = _obj as Touchable;
	if (touched) obj[TOUCHED] = true;
	else delete obj[TOUCHED];
	return _obj;
}

export const untouch = <T>(obj: T) => touch(obj, false);

export const touched = <T>(obj: T) => !!(obj as Touchable)?.[TOUCHED];

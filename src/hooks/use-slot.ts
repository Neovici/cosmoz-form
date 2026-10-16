import { useMemo, useRef, useState } from '@pionjs/pion';

type Slot<V> = { token: object; value: V };

// The one open dialog. `claim` only fills an empty slot and `release` only
// clears the caller's own token, so a background save can't replace or close
// a dialog it doesn't own.
export const useSlot = <V>() => {
	const [slot, setSlot] = useState<Slot<V>>();
	const current = useRef<Slot<V> | undefined>(undefined);
	const api = useMemo(() => {
		const set = (next?: Slot<V>) => {
			current.current = next;
			setSlot(next);
		};
		return {
			show: (token: object, value: V) => set({ token, value }),
			claim: (token: object, value: V) => {
				if (current.current) return false;
				set({ token, value });
				return true;
			},
			release: (token: object) => {
				if (current.current?.token === token) set(undefined);
			},
		};
	}, []);
	return { value: slot?.value, ...api };
};

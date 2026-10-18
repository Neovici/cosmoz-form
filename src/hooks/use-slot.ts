import { useMemo, useRef, useState } from '@pionjs/pion';

type Slot<V> = { token: object; value: V; recovery?: boolean };

// The one open dialog. `claim` only fills an empty slot and `release` only
// clears the caller's own token, so a background save can't replace or close
// a dialog it doesn't own.
export const useSlot = <V>() => {
	const [slot, setSlot] = useState<Slot<V>>();
	const current = useRef<Slot<V> | undefined>(undefined);
	const waiting = useMemo(() => ({ items: [] as Slot<V>[] }), []);
	const api = useMemo(() => {
		const set = (next?: Slot<V>) => {
			current.current = next;
			setSlot(next);
		};
		return {
			show: (token: object, value: V) => {
				if (current.current?.recovery) {
					waiting.items = [current.current, ...waiting.items];
				}
				set({ token, value });
			},
			defer: (token: object, value: V) => {
				const next = { token, value, recovery: true };
				if (!current.current) set(next);
				else waiting.items = [...waiting.items, next];
			},
			claim: (token: object, value: V) => {
				if (current.current) return false;
				set({ token, value });
				return true;
			},
			release: (token: object) => {
				if (current.current?.token !== token) return;
				const [next, ...rest] = waiting.items;
				waiting.items = rest;
				set(next);
			},
		};
	}, []);
	return { value: slot?.value, ...api };
};

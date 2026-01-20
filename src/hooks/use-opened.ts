import { useState, useMemo } from '@pionjs/pion';

export const useOpened = <T>() => {
	const [opened, setOpened] = useState(() => false as T | boolean);
	return useMemo(
		() => ({
			opened,
			onOpen: (opened: T | boolean) => setOpened(opened ?? true),
			onClose: () => setOpened(false),
			onToggle: () => setOpened((opened) => !opened),
		}),
		[opened]
	);
};

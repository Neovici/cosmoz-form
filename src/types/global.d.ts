declare module '@neovici/cosmoz-i18next' {
	export function _(s: string, ...args: unknown[]): string;
}

declare module '@neovici/cosmoz-viewinfo' {
	export function useViewInfo(): { mobile: boolean };
}

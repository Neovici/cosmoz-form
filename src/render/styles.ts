import { tagged as css } from '@neovici/cosmoz-utils';

export const styles = css`
	.headers {
		display: flex;
		border-bottom: solid 1px var(--cz-color-border-primary);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-weight: var(--cz-font-weight-regular);
		color: var(--cz-color-text-secondary);
		padding-block: calc(var(--cz-spacing) * 2.5);
		width: 100%;
	}
	.header {
		flex: auto;
		margin-inline: var(--cz-spacing);
		flex: 1 1 0px;
	}
	.items {
		min-height: 100px;
		width: 100%;
		position: relative;
		overflow: auto;
		flex: auto;
	}
	.item {
		display: flex;
		width: 100%;
	}
	.input {
		flex: 1 1 0px;
	}
	.item > .input {
		margin: var(--cz-spacing);
	}

	.input-basic {
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-bottom: 2px solid var(--cz-color-border-primary);
		margin: var(--cz-spacing);
	}
	cosmoz-button {
		margin-inline: var(--cz-spacing);
	}
`;

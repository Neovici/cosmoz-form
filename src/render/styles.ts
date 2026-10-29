import { tagged as css } from '@neovici/cosmoz-utils';

export const styles = css`
	/* Stays in view while the rows scroll beneath it. */
	.headers {
		position: sticky;
		inset-block-start: 0;
		z-index: 1;
		display: flex;
		width: 100%;
		padding-block: calc(var(--cz-spacing) * 2);
		border-bottom: 1px solid var(--cz-color-border-secondary);
		background: var(--cz-color-bg-primary);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		font-weight: var(--cz-font-weight-medium);
		color: var(--cz-color-text-tertiary);
	}
	.header {
		flex: 1 1 0px;
		min-width: 0;
		margin-inline: var(--cz-spacing);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
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
	/* Never narrower than the columns' minimums; the list scrolls sideways instead. */
	.headers,
	.item {
		min-width: min-content;
	}
	/* Every row splits the width like the headers do; an input's own content
	   (a suffix, a warning icon) never widens its column in one row only. */
	.input {
		flex: 1 1 0px;
		min-width: 0;
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
		align-items: center;
	}
	/* The autocomplete's own input keeps the margin for its error otherwise,
	   which makes autocomplete rows taller than the rest. */
	.item > cosmoz-autocomplete::part(input) {
		margin-bottom: 0;
	}
	.remove {
		flex: none;
		align-self: center;
	}
	.remove-placeholder {
		visibility: hidden;
		block-size: 0;
	}
`;

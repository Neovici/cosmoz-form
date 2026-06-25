import { tagged as css } from '@neovici/cosmoz-utils';

const styles = css`
	:host::part(content) {
		padding: 0;
	}

	.description {
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		color: var(--cz-color-text-secondary);
		margin-block: calc(var(--cz-spacing) * 4);
	}
	.description * {
		line-height: normal;
	}
	.form {
		display: flex;
		flex-direction: column;
		padding: calc(var(--cz-spacing) * 3);
		overflow: auto;
		scrollbar-gutter: stable both-edges;
	}

	.failure {
		color: var(--cz-color-text-error);
		align-self: center;
		flex: 1;
	}
`;

export default styles;

import { tagged as css } from '@neovici/cosmoz-utils';

const styles = css`
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
	}

	.failure {
		color: var(--cz-color-text-error);
		margin: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 6);
		white-space: pre-wrap;
		word-break: break-word;
		max-height: 40vh;
		overflow-y: auto;
	}
`;

export default styles;

import { tagged as css } from '@neovici/cosmoz-utils';

const styles = css`
	:host {
		--padding: calc(var(--cz-spacing) * 6);
	}
	.description {
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		color: var(--cz-color-text-secondary);
		padding-inline: var(--padding);
		margin-block: calc(var(--cz-spacing) * 4);
	}
	.description * {
		line-height: normal;
	}
	.form {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		padding-inline: var(--padding);
	}

	.failure {
		color: var(--cz-color-text-error);
		align-self: center;
		flex: 1;
	}
`;

export default styles;

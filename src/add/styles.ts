import { tagged as css } from '@neovici/cosmoz-utils';
import buttonStyles from '../styles/button';

export const renderAddStyles = () => css`
	:host {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.failure {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		margin: calc(var(--cz-spacing) * 2) 0;
		color: var(--cz-color-text-error);
	}

	.input-toggle {
		margin-block: calc(var(--cz-spacing) * 2);
	}

	${buttonStyles}
`;

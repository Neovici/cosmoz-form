import { tagged as css } from '@neovici/cosmoz-utils';
import { useSharedStyles } from '../../../hooks/use-shared-styles';
import buttonStyles from '../styles/button';

export const renderAddStyles = () => css`
	${useSharedStyles()}
	:host {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.forbidden {
		font-size: 16px;
	}

	.failure {
		font-size: 12px;
		line-height: 20px;
		margin: 8px 0;
	}

	.failure,
	.forbidden {
		color: var(--error-color, #fc5c5b);
	}

	.input-common::part(float) {
		font-size: 14px;
		line-height: 20px;
	}

	.input-toggle {
		margin-top: 0.875em;
	}

	cosmoz-tab-card::part(content) {
		padding-bottom: 24px;
	}

	${buttonStyles}
	.button cz-spinner {
		margin-right: 8px;
	}
`;

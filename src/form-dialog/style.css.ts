import { tagged as css } from '@neovici/cosmoz-utils';

const styles = css`
	.description {
		padding: 0 24px;
		/* scrollable, so a long description can't push the buttons out of the
		   dialog's clipped content area */
		overflow-y: auto;
		min-height: 0;
	}
	.description * {
		line-height: normal;
	}
	.form {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}
	.input {
		margin-top: 20px;
		padding: 0px 24px 4px 24px;
	}
	.input:last-child {
		margin-bottom: 16px;
	}
	.buttons {
		flex: none;
	}
	.save {
		font-weight: bold;
	}
	.save[data-progress] {
		opacity: 0.6;
	}
	.failure {
		color: #fc5c5b;
		align-self: center;
		flex: 1;
	}
	cz-spinner {
		align-self: center;
	}
`;

export default styles;

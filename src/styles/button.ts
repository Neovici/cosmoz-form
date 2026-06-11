import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	.file::-webkit-file-upload-button,
	.file::file-selector-button {
		background: var(--cz-color-bg-overlay);
		color: var(--cz-color-text-on-brand);
		box-sizing: border-box;
		cursor: pointer;
		outline: none;
		flex: none;
		border: none;
		padding-inline: calc(var(--cz-spacing) * 4);
		border-radius: var(--cz-radius-md);
		min-height: 40px;
		min-width: 78px;
		font-family: inherit;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-medium);
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.file::-webkit-file-upload-button:hover,
	.file::file-selector-button:hover {
		opacity: 0.8;
	}

	.buttons {
		display: flex;
		justify-content: flex-end;
		padding-inline: calc(var(--cz-spacing) * 6);
		padding-block: calc(var(--cz-spacing) * 5.5);
		gap: var(--cz-spacing);

		& cosmoz-button {
			min-width: calc(var(--cz-spacing) * 20);
		}
	}

	.button-ricon {
		border: none;
		border-radius: 50%;
		fill: var(--primary-button-icon-fill, #596679);
		padding: 8px;
		display: inline-flex;
		background: transparent;
		cursor: pointer;
		transition: background 0.15s ease;
	}
	.button-ricon:active {
		background: rgb(56, 62, 74, 0.15);
	}
	.actionButton {
		border: transparent;
		background: var(--cz-action-button-bg, #fff);
		border-radius: 500px;
		font-size: 1.08em;
		letter-spacing: -0.01em;
		padding: 0.5em 0.9em;
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
		justify-content: center;
		white-space: nowrap;
		transition: background 0.25s;
	}
	.actionButton:hover {
		background: var(--cz-action-button-hover-bg, #f0f0f0);
	}
	.actionButton span {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 10px;
	}

	.actionButton iron-icon {
		margin-left: 4px;
		flex: none;
		--iron-icon-width: 18px;
		--iron-icon-height: 18px;
	}
	.actionButton iron-icon:hover {
		color: var(--cz-accent-color);
	}
`;

import { autocompleteKeybindings } from '@neovici/cosmoz-autocomplete';
import '@neovici/cosmoz-tokens';
import { useKeybindings } from '@neovici/cosmoz-utils/keybindings';
import { component, html } from '@pionjs/pion';
import i18next from 'i18next';

// Initialize i18next for the autocomplete component
i18next.init({
	lng: 'en',
	resources: {
		en: {
			translation: {
				'No results found': 'No results found',
			},
		},
	},
});

/**
 * Component that provides keybindings context for all stories.
 * Uses children prop instead of slot since shadow DOM is disabled
 * to allow context events to bubble up to the provider.
 */
customElements.define(
	'storybook-keybindings',
	component(
		(props) => {
			const register = useKeybindings(autocompleteKeybindings);
			return html`<cosmoz-keybinding-provider .value=${register}>
				${props.content}
			</cosmoz-keybinding-provider>`;
		},
		{ useShadowDOM: false },
	),
);

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/iu,
				date: /Date$/u,
			},
		},
		layout: 'fullscreen',
	},
	decorators: [
		(story, context) => {
			const isDark = context.globals?.theme === 'dark';

			if (isDark) {
				document.documentElement.classList.add('dark-mode');
			} else {
				document.documentElement.classList.remove('dark-mode');
			}

			return html`
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
					@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

					.story-root {
						font-family: var(--cz-font-body);
						color: var(--cz-color-text-primary);
						background: var(--cz-color-bg-primary);
						padding: calc(var(--cz-spacing) * 4);
						min-height: 100dvh;
						transition:
							background-color 0.2s,
							color 0.2s;
					}

					.story-row {
						display: flex;
						gap: calc(var(--cz-spacing) * 4);
						align-items: center;
						flex-wrap: wrap;
					}

					.story-stack {
						display: flex;
						flex-direction: column;
						gap: calc(var(--cz-spacing) * 6);
					}

					.story-grid {
						display: grid;
						gap: calc(var(--cz-spacing) * 4);
						grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
					}

					.story-section-title {
						font-size: var(--cz-text-lg);
						font-weight: var(--cz-font-weight-semibold);
						color: var(--cz-color-text-secondary);
						margin-bottom: calc(var(--cz-spacing) * 4);
					}

					.story-label {
						font-size: var(--cz-text-sm);
						color: var(--cz-color-text-tertiary);
						min-width: 100px;
					}
				</style>
				<storybook-keybindings
					.content=${html`<div class="story-root">${story()}</div>`}
				></storybook-keybindings>
			`;
		},
	],
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'sun', title: 'Light' },
					{ value: 'dark', icon: 'moon', title: 'Dark' },
				],
				dynamicTitle: true,
			},
		},
	},
};
export default preview;

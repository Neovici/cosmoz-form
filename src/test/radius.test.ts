import { assert, fixture, html } from '@open-wc/testing';
import buttonStyles from '../styles/button';

suite('form control radius', () => {
	test('inherits and responds to the shared control role', async () => {
		const scope = await fixture<HTMLElement>(html`
			<div style="--cz-radius-control:18px">
				<style>
					${buttonStyles}
				</style>
				<input class="file" type="file" />
			</div>
		`);
		const button = scope.querySelector('input')!;
		assert.equal(
			getComputedStyle(button, '::file-selector-button').borderRadius,
			'18px',
		);
		scope.style.setProperty('--cz-radius-control', '14px');
		assert.equal(
			getComputedStyle(button, '::file-selector-button').borderRadius,
			'14px',
		);
	});
});

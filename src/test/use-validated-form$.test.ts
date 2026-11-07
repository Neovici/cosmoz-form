import { renderHook } from '@neovici/testing';
import { waitUntil } from '@open-wc/testing';
import { init } from 'i18next';
import { useValidatedForm$ } from '../use-validated-form$';
import { required } from '../validation';

init({ lng: 'en', resources: {} });

type Values = { name?: string };

const fields = [{ id: 'name' as const, validate: required }];
const initial: Values = {};

suite('useValidatedForm$ submitted state', () => {
	const render = () =>
		renderHook(() => useValidatedForm$<Values>({ fields, initial }));

	test('reset hides the revealed errors again', async () => {
		const { result } = await render();
		result.current.onSave();
		await waitUntil(() => result.current.touched);
		result.current.onReset();
		await waitUntil(() => !result.current.touched);
	});

	test('loading new values hides the revealed errors again', async () => {
		const { result } = await render();
		result.current.onSave();
		await waitUntil(() => result.current.touched);
		result.current.load({ name: '' });
		await waitUntil(() => !result.current.touched);
	});
});

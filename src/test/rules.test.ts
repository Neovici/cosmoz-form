import { assert } from '@open-wc/testing';
import type { Fields } from '../types';
import { afterStartDate, required } from '../validation';

interface Period {
	fromDate: string;
	toDate: string;
}

const rule = afterStartDate<Period, 'toDate', string>('fromDate');

suite('afterStartDate', () => {
	test('the end must come after the start', () => {
		const values = { fromDate: '2026-01-10', toDate: '' };
		assert.isFalse(rule('2026-01-11', values));
		assert.notStrictEqual(rule('2026-01-10', values), false);
		assert.notStrictEqual(rule('2026-01-09', values), false);
	});

	test('eq allows the same day', () => {
		const values = { fromDate: '2026-01-10', toDate: '' };
		assert.isFalse(
			afterStartDate<Period, 'toDate', string>('fromDate', true)(
				'2026-01-10',
				values,
			),
		);
	});

	test('passes while either date is missing', () => {
		assert.isFalse(
			rule('2026-01-10', { fromDate: '', toDate: '' }),
		);
		assert.isFalse(rule('', { fromDate: '2026-01-10', toDate: '' }));
	});

	test('is a field rule, combined with others in validate', () => {
		const fields: Fields<Period> = [
			{ id: 'fromDate', validate: required },
			{ id: 'toDate', validate: [required, afterStartDate('fromDate')] },
		];
		assert.lengthOf(fields, 2);
	});
});

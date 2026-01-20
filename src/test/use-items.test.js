/* eslint-disable mocha/max-top-level-suites */

import { assert } from '@open-wc/testing';
import { renderHook } from '@neovici/testing';

import { useItems } from '../use-items';
import { TOUCHED } from '../touch';

suite('useItems', () => {
	let result;
	let nextUpdate;

	let id = 0;

	const // basic rule
		computesNameLength = [
			({ name }) => ({ nameLength: name.length }),
			({ name }) => [name],
		],
		// cascading rule
		doublesNameLength = [
			({ nameLength }) => ({ doubledNameLength: nameLength * 2 }),
			({ nameLength }) => [nameLength],
		],
		// complex rule
		tracksHistory = [
			(
				{ name, nameLength },
				{ name: oldName, nameLength: oldNameLength } = {},
				index,
				oldIndex,
			) => ({
				history: [
					oldName && `#${oldIndex}: ${oldName}(${oldNameLength}) ->`,
					`#${index}: ${name}(${nameLength})`,
				]
					.filter(Boolean)
					.join(' '),
			}),
			({ name }, index) => [name, index],
		],
		// always applied rule (no deps array)
		addIndex = [(value, old, index) => ({ index })],
		// one-off rule
		generateId = [() => ({ id: id++ }), () => []],
		preservesOriginalName = [({ name }) => ({ originalName: name }), () => []],
		// one-off alternative rule
		reverseOriginalName = [
			({ name }) => ({ originalName: name.split('').reverse().join('') }),
			() => [],
		];

	setup(async () => {
		id = 0;
		const initial = [{ name: 'initial' }],
			rules = [
				computesNameLength,
				doublesNameLength,
				tracksHistory,
				preservesOriginalName,
				generateId,
				addIndex,
			];

		({ result, nextUpdate } = await renderHook(
			({ initial, rules }) => useItems({ initial, rules }),
			{ initialProps: { initial, rules } },
		));
	});

	test('initialize with data', async () => {
		assert.equal(result.current.items.length, 1);
	});

	test('add items', async () => {
		result.current.update(1, { name: 'added' });
		await nextUpdate();
		assert.equal(result.current.items.length, 2);
		assert.equal(result.current.items[1].name, 'added');
	});

	test('add items to out of bounds index', async () => {
		result.current.update(10, { name: 'added' });
		await nextUpdate();
		assert.equal(result.current.items.length, 2);
		assert.equal(result.current.items[1].name, 'added');
	});

	test('remove items', async () => {
		result.current.remove(0);
		await nextUpdate();
		assert.equal(result.current.items.length, 0);
	});

	test('clear items', async () => {
		result.current.clear();
		await nextUpdate();
		assert.equal(result.current.items.length, 0);
	});

	test('reset items', async () => {
		result.current.update(0, { name: 'updated' });
		result.current.update(1, { name: 'added' });
		await nextUpdate();

		assert.equal(result.current.items.length, 2);

		result.current.reset();
		await nextUpdate();

		assert.equal(result.current.items.length, 1);
		assert.equal(result.current.items[0].name, 'initial');
	});

	test('update many items', async () => {
		result.current.update([
			[0, { name: 'updated' }],
			[1, { name: 'added 1' }],
			[2, { name: 'added 2' }],
		]);
		await nextUpdate();
		assert.equal(result.current.items.length, 3);
		assert.equal(result.current.items[0].name, 'updated');
		assert.equal(result.current.items[1].name, 'added 1');
		assert.equal(result.current.items[2].name, 'added 2');
	});

	suite('rules', () => {
		test('applies rules on initial data', async () => {
			assert.equal(result.current.items[0].nameLength, 7);
		});

		test('applies rules on updates', async () => {
			result.current.update(0, { name: 'short' });
			await nextUpdate();

			assert.equal(result.current.items[0].nameLength, 5);
		});

		test('applies rules on new items', async () => {
			result.current.update(1, { name: 'new' });
			await nextUpdate();

			assert.equal(result.current.items[0].nameLength, 7);
			assert.equal(result.current.items[1].nameLength, 3);
		});

		test('applies rules on multi-updates', async () => {
			result.current.update([
				[0, { name: 'short' }],
				[1, { name: 'new' }],
			]);
			await nextUpdate();

			assert.equal(result.current.items[0].nameLength, 5);
			assert.equal(result.current.items[1].nameLength, 3);
		});

		test('rules have cascading effects', async () => {
			assert.equal(result.current.items[0].doubledNameLength, 14);

			result.current.update(0, { name: 'short' });
			await nextUpdate();

			assert.equal(result.current.items[0].doubledNameLength, 10);
		});

		test('rules can access the old item and the index', async () => {
			assert.equal(result.current.items[0].history, '#0: initial(7)');

			result.current.update([
				[0, { name: 'short' }],
				[1, { name: 'new' }],
			]);
			await nextUpdate();

			assert.equal(
				result.current.items[0].history,
				'#0: initial(7) -> #0: short(5)',
			);
			assert.equal(result.current.items[1].history, '#1: new(3)');
		});

		test('can have one-off rules', async () => {
			assert.equal(result.current.items[0].originalName, 'initial');
			assert.equal(result.current.items[0].id, 0);

			result.current.update(0, { name: 'short' });
			await nextUpdate();

			assert.equal(result.current.items[0].originalName, 'initial');
			assert.equal(result.current.items[0].id, 0);
		});

		test('applies rules after reset', async () => {
			result.current.clear();
			await nextUpdate();

			result.current.reset();
			await nextUpdate();

			assert.equal(result.current.items[0].nameLength, 7);
		});

		test('always applies rules without deps', async () => {
			assert.equal(result.current.items[0].index, 0);

			result.current.update(1, { name: 'second item' });
			await nextUpdate();

			assert.equal(result.current.items[0].index, 0);
			assert.equal(result.current.items[1].index, 1);

			result.current.remove(0);
			await nextUpdate();

			assert.equal(result.current.items[0].name, 'second item');
			assert.equal(result.current.items[0].index, 0);
		});

		test('handles indexes after removal correctly', async () => {
			result.current.load([
				{ name: 'first item' },
				{ name: 'second item' },
				{ name: 'third item' },
			]);
			await nextUpdate();

			assert.equal(result.current.items[0].index, 0);
			assert.equal(result.current.items[1].index, 1);
			assert.equal(result.current.items[2].index, 2);
			assert.equal(result.current.items[0].history, '#0: first item(10)');
			assert.equal(result.current.items[1].history, '#1: second item(11)');
			assert.equal(result.current.items[2].history, '#2: third item(10)');

			result.current.remove(1);
			await nextUpdate();

			assert.equal(result.current.items[0].index, 0);
			assert.equal(result.current.items[1].index, 1);
			assert.isUndefined(result.current.items[2]);
			assert.equal(result.current.items[0].history, '#0: first item(10)');
			assert.equal(
				result.current.items[1].history,
				'#2: third item(10) -> #1: third item(10)',
			);
		});
	});

	suite('setItems', () => {
		test('can replace items', async () => {
			result.current.setItems([{ name: 'hello' }, { name: 'world' }]);
			await nextUpdate();

			assert.equal(result.current.items[0].name, 'hello');
			assert.equal(result.current.items[1].name, 'world');
			assert.equal(result.current.items.length, 2);
		});

		test('replacing items ignores rules', async () => {
			result.current.setItems([{ name: 'hello' }]);
			await nextUpdate();

			assert.deepEqual(result.current.items[0], { name: 'hello' });
		});

		test('updates done after replacing items apply the rules', async () => {
			result.current.setItems([{ name: 'hello' }]);
			await nextUpdate();

			result.current.update(0, { name: 'short' });
			await nextUpdate();

			assert.deepEqual(result.current.items[0], {
				index: 0,
				name: 'short',
				nameLength: 5,
				doubledNameLength: 10,
				history: '#0: hello(undefined) -> #0: short(5)',
			});
		});

		test('one-off rules are never applied after replacing items', async () => {
			result.current.setItems([{ name: 'hello' }]);
			await nextUpdate();

			result.current.update(0, { name: 'short' });
			await nextUpdate();

			assert.isUndefined(result.current.items[0].originalName);
		});
	});

	suite('load', () => {
		test('can load items', async () => {
			result.current.load([{ name: 'hello' }]);
			await nextUpdate();

			assert.equal(result.current.items[0].name, 'hello');
		});

		test('rules are applied on loaded items', async () => {
			result.current.load([{ name: 'hello' }]);
			await nextUpdate();

			assert.deepEqual(result.current.items[0], {
				id: 1,
				index: 0,
				name: 'hello',
				nameLength: 5,
				doubledNameLength: 10,
				history: '#0: hello(5)',
				originalName: 'hello',
			});
		});

		test('can specify different rules when loading items', async () => {
			result.current.load(
				[{ name: 'hi' }],
				[computesNameLength, reverseOriginalName],
			);
			await nextUpdate();

			assert.deepEqual(
				result.current.items[0],
				{
					name: 'hi',
					nameLength: 2,
					originalName: 'ih',
				},
				'custom rules apply on load',
			);

			result.current.update(0, { name: 'hello' });
			await nextUpdate();

			assert.deepEqual(
				result.current.items[0],
				{
					index: 0,
					name: 'hello',
					nameLength: 5,
					doubledNameLength: 10,
					history: '#0: hi(2) -> #0: hello(5)',
					originalName: 'ih',
				},
				'normal rules are applied after load',
			);
		});
	});

	suite('touched', () => {
		test('initial items are not touched', async () => {
			assert.isTrue(!result.current.items[0][TOUCHED]);
		});

		test('updating an item marks it as touched', async () => {
			result.current.update(0, { name: 'updated' });
			await nextUpdate();

			assert.isTrue(result.current.items[0][TOUCHED]);
		});

		test('adding an item marks it as touched', async () => {
			result.current.update(1, { name: 'added' });
			await nextUpdate();

			assert.isTrue(result.current.items[1][TOUCHED]);
		});

		test('replaced items are not touched', async () => {
			result.current.setItems([{ name: 'replaced' }]);
			await nextUpdate();

			assert.isTrue(!result.current.items[0][TOUCHED]);
		});

		test('loaded items are not touched', async () => {
			result.current.load([{ name: 'replaced' }]);
			await nextUpdate();

			assert.isTrue(!result.current.items[0][TOUCHED]);
		});
	});

	suite('touched alt', () => {
		test('not touched on init', async () => {
			assert.isFalse(result.current.touched);
		});

		test('touched after update', async () => {
			result.current.update(0, { name: 'updated' });
			await nextUpdate();

			assert.isTrue(result.current.touched);
		});

		test('touched after add', async () => {
			result.current.update(1, { name: 'added' });
			await nextUpdate();

			assert.isTrue(result.current.touched);
		});

		test('touched after remove', async () => {
			result.current.remove(0);
			await nextUpdate();

			assert.isTrue(result.current.touched);
		});

		test('not touched after replace', async () => {
			result.current.setItems([{ name: 'replaced' }]);
			await nextUpdate();

			assert.isFalse(result.current.touched);
		});

		test('not touched after load', async () => {
			result.current.load([{ name: 'loaded' }]);
			await nextUpdate();

			assert.isFalse(result.current.touched);
		});

		test('touched after clear', async () => {
			result.current.clear();
			await nextUpdate();

			assert.isTrue(result.current.touched);
		});

		test('not touched after reset', async () => {
			result.current.clear();
			await nextUpdate();

			result.current.reset();
			await nextUpdate();

			assert.isFalse(result.current.touched);
		});
	});
});

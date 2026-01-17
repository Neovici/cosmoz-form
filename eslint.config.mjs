import cfg from '@neovici/cfg/eslint/index.mjs';

export default [
	...cfg,
	{
		ignores: ['dist/', 'coverage/', 'storybook-static/'],
	},
];

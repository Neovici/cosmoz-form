import cfg from '@neovici/cfg/web/test-runner.mjs';

export default {
	...cfg,
	files: 'src/**/*.test.(j|t)s',
	coverageConfig: {
		...cfg.coverageConfig,
		threshold: {
			statements: 65,
			branches: 70,
			functions: 40,
			lines: 65,
		},
	},
};

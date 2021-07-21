module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended', 'prettier/react'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'linebreak-style': ['error', 'windows'],
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['extends', 'tailwind']
			}
		],
		'block-no-empty': null,
		'unit-whitelist': ['em', 'rem', 's']
	}
};

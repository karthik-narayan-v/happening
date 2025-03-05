import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    plugins: {
      react,
      reactHooks,
      prettier,
    },
  },
  react.configs.recommended,
  reactHooks.configs.recommended,
  prettierConfig,
  {
    ignores: ['node_modules/', 'build/', 'ios/', 'android/'],
  },
  {
    rules: {
      'prettier/prettier': ['error', {endOfLine: 'auto'}],
      'react/react-in-jsx-scope': 'off',
    },
  },
];

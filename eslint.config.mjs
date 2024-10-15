import globals from 'globals';

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginTailwindcss from 'eslint-plugin-tailwindcss';
import pluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import pluginCypress from 'eslint-plugin-cypress/flat';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPrettierRecommended,
  ...pluginTailwindcss.configs['flat/recommended'],

  {
    files: ['**/*.svelte', '*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
    },
  },

  ...pluginSvelte.configs['flat/recommended'],

  {
    ...pluginCypress.configs.recommended,
    files: ['spec/cypress/**/*.{js,ts}'],
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },

  {
    ignores: [
      '.ruby-lsp/',
      '.yarn/',
      'app/javascript/routes.js',
      'app/javascript/routes.d.ts',
      'config/',
      'db/',
      'log/',
      'node_modules/',
      'public/',
      'tmp/',
      'vendor/',
      'coverage/',
    ],
  },
];

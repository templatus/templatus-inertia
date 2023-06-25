module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte'], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
  },

  env: {
    es6: true,
    browser: true,
  },

  extends: [
    // add more generic rule sets here, such as:
    // 'eslint:recommended',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
  ],

  rules: {
    // override/add rules settings here, such as:
    // 'svelte/rule-name': 'error'
  },

  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
};

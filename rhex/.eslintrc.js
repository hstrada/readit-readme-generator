module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always-and-inside-groups',
        groups: ['module', '/^react/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};

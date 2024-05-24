'use strict';

module.exports = {
  extends: [
    'next',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    require.resolve('./rules/react.js'),
    require.resolve('./rules/next.js'),
    require.resolve('./rules/typescript.js'),
    require.resolve('./rules/function.js'),
    require.resolve('./rules/sort-order.js'),
    require.resolve('./rules/variables.js')
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint',
    'unused-imports',
    'typescript-sort-keys',
    'sort-keys-fix'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    },
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.js', '.ts', '.tsx']
    //   }
    // }
  },
}
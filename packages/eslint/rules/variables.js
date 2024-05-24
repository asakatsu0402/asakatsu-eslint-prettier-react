'use strict'

module.exports = {
  rules: {
    // disallow catch clause parameters from shadowing variables in the outer scope
    'no-catch-shadow': 'error',

    // disallow deleting variables
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    'no-label-var': 'error',

    // disallow the use of undeclared variables unless mentioned in /*global */ comments
    'no-undef': 'error',

    // disallow unused variables
    'no-unused-vars': 'error',

    // disallow the use of variables before they are defined
    'no-use-before-define': 'error',

    // 未使用のimport
    'unused-imports/no-unused-imports': 'warn',

    // 未使用の変数
    'unused-imports/no-unused-vars': ['warn'],

    // named-exportを許可
    'import/prefer-default-export': 'off',

    // 絶対パスでのモジュールの読み込みをokにする
    'import/no-unresolved': 'off',

    // enum禁止
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't use `enum` as a type."
      }
    ]
  }
}
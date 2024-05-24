'use strict'

module.exports = {
  // typeをimportするときは、import typeを使う
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports'
    }
  ],
  // anyの禁止
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/explicit-module-boundary-types': ['error'],
  // 関数の返り値の型と、関数内のreturnの型を一致させる
  '@typescript-eslint/method-signature-style': ['error', 'property'],
  // 未使用の変数の削除
  '@typescript-eslint/no-unused-vars': 'error',
  // 未使用の変数がある場合エラーにする
  '@typescript-eslint/prefer-for-of': 'error'
}
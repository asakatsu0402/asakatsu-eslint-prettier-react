'use strict'

module.exports = {
  // if文内のcontinueをokにする
  'no-continue': 'off',

  // for (const a of A) を許可
  'no-restricted-syntax': 'off',

  // 無名関数は作らないこと
  'no-magic-numbers': 'warn',

  // 行末に不要な空白を残さないこと
  'no-trailing-spaces': 'error',

  // 無駄な文字列結合は行わないこと
  'no-useless-concat': 'error',

  // オブジェクト定義時にショートハンドが利用できる場合は利用すること
  'object-shorthand': 'error',

  // コールバックにはアロー関数を利用すること
  'prefer-arrow-callback': 'error',

  // switch 文に default ケースが含まれていることを強制
  'default-case': 'error'
}
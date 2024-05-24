'use strict'

module.exports = {
  rules: {
    // for(let i... でiを使用してない場合は for of を使うように強制
    'react-hooks/rules-of-hooks': 'error',
    // React Hooks のための設定
    'react-hooks/exhaustive-deps': 'warn',
    // prop types を使っていないので off
    'react/prop-types': 'off',
    // 順序の入れ替えがない場合はok
    'react/no-array-index-key': 'off',
    // component の props の destructuring を非必須にする
    'react/destructuring-assignment': 'off',
    // onClick={e => handleClick(e)} で引っかかるため無効化
    'jsx-no-lambda': 'off'
  }
}
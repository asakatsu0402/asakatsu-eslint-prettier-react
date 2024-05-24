'use strict'

module.exports = {
  rules: {
    // プロパティの順序を強制
    'order/order': [
      'custom-properties', // カスタムプロパティ
      'dollar-variables', // 変数
      'declarations', // 宣言
      'rules', // ルール
      'at-rules' // atルール
    ],
    // プロパティの具体的な順序を設定
    'order/properties-order': [
      'display',
      'justify-content',
      'align-items',
      'flex-direction',
      'flex-wrap',
      'flex',
      'grid',
      'visibility',
      'opacity',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'max-width',
      'min-width',
      'width',
      'max-height',
      'min-height',
      'height',
      'margin',
      'padding',
      'overflow',
      'border',
      'border-radius',
      'background',
      'color',
      'text-align',
      'box-shadow',
      'object-fit',
      'font-family',
      'font-size',
      'font-weight',
      'line-height'
    ]
  }
}
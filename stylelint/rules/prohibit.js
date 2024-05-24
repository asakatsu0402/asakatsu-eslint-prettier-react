'use strict'

module.exports = {
  rules: {
    // Prettierのルールを適用
    'prettier/prettier': false,
    // 重複したフォントファミリー名を禁止
    'font-family-no-duplicate-names': true,
    // 無効なcalc関数を禁止
    'function-calc-no-invalid': true,
    // 無効なlinear-gradient関数を禁止
    'function-linear-gradient-no-nonstandard-direction': true,
    // 文字列内の改行を禁止
    'string-no-newline': true,
    // 未知の単位を禁止
    'unit-no-unknown': true,
    // 未知のプロパティを禁止
    'property-no-unknown': true,
    // !importantを使用したキーフレーム宣言を禁止
    'keyframe-declaration-no-important': true,
    // 重複したプロパティ宣言を禁止
    'declaration-block-no-duplicate-properties': true,
    // ショートハンドプロパティの上書きを禁止
    'declaration-block-no-shorthand-property-overrides': true,
    // 空のブロックを禁止
    'block-no-empty': true,
    // 未知の疑似クラスを禁止
    'selector-pseudo-class-no-unknown': true,
    // 未知の型セレクターを禁止
    'selector-type-no-unknown': true,
    // 未知のメディア機能名を禁止
    'media-feature-name-no-unknown': true,
    // 空のコメントを禁止
    'comment-no-empty': true,
    // 特異性の降順を禁止
    'no-descending-specificity': true,
    // 重複した@importルールを禁止
    'no-duplicate-at-import-rules': true,
    // 重複したセレクターを禁止
    'no-duplicate-selectors': true,
    // 空のソースを禁止
    'no-empty-source': true,
    // 余分なセミコロンを禁止
    'no-extra-semicolons': true,
    // 無効なダブルスラッシュコメントを禁止
    'no-invalid-double-slash-comments': true
  }
}
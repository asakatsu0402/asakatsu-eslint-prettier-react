'use strict';

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    require.resolve('./rules/prohibit.js'),
    require.resolve('./rules/properties-order.js'),
  ],
  plugins: [
    'stylelint-order'
  ]
}
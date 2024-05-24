'use strict'

module.exports = {
  // Sort interfaces
  'typescript-sort-keys/interface': 'error',
  // Sort string enum keys
  'typescript-sort-keys/string-enum': 'error',
  'typescript-sort-keys/interface': 'error', // Sort interfaces
  'typescript-sort-keys/string-enum': 'error', // Sort string enum keys
  'sort-keys-fix/sort-keys-fix': 'error', // Sort object keys
  // import 順序の強制
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
      pathGroups: [
        {
          pattern: '{react,react-dom/**,react-router-dom}',
          group: 'builtin',
          position: 'before'
        }
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: {
        order: 'asc'
      },
      'newlines-between': 'always'
    }
  ],
}
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['@typescript-eslint', 'check-file'],
  extends: [
    'next/core-web-vitals',
    'react-app',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'object-shorthand': 'error',
    'no-useless-rename': 'error',
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-empty-function': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off', // TODO consider enabling this in a future story
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // TODO consider enabling this in a future story
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'import/export': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-anonymous-default-export': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['..'],
      },
    ],
    // Using a custom glob pattern since the built in 'KEBAB_CASE'
    // doesn't allow numbers in the file/folder name
    'check-file/folder-naming-convention': [
      'error',
      { 'src/**': '+([a-z0-9])*(-+([a-z0-9]))' },
    ],
    'check-file/filename-naming-convention': [
      'error',
      { 'src/**/*': '+([a-z0-9])*(-+([a-z0-9]))' },
      { ignoreMiddleExtensions: true },
    ],
  },
  settings: {
    'import/internal-regex': '^@/',
  },
};

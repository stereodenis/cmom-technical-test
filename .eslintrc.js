module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-key': 'error',
    'no-implicit-coercion': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': 'error',
    'no-unused-vars': 'off',
    'no-nested-ternary': 'error',
  },
}

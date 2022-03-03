module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 0,
    'react/self-closing-comp': 0,
    'jsx-quotes': 0,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'no-unused-vars': 0,
    'typescript-eslint': 0,
  },
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
};

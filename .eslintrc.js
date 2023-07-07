module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  plugins: ['react', 'react-native', 'simple-import-sort'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'simple-import-sort/exports': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-color-literals': 'off',
    'no-undef': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],
          ['^(@|components)(/.*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
};

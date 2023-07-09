module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@managers': './src/managers',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@ui': './src/ui',
          '@store': './src/store',
          '@components': './src/components',
          '@api': './src/api',
          '@navigation': './src/navigation',
          '@mocks': './src/mocks',
        },
      },
    ],
  ],
};

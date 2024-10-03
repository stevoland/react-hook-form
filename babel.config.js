module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-typescript'],
  plugins: [
    [
      'babel-plugin-react-compiler',
      {
        runtimeModule: 'react-compiler-runtime-polyfill',
        sources: (filename) => {
          return filename.indexOf('__tests__') !== -1;
        },
      },
    ],
  ],
};

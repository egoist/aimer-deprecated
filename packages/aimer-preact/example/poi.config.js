module.exports = {
  entry: 'example/index.js',
  babel: {
    presets: [
      // require.resolve('babel-preset-preact-app')
    ],
    plugins: [
      [require.resolve('babel-plugin-transform-react-jsx'), {
        pragma: 'h'
      }]
    ]
  }
}

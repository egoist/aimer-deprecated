const externals = require('webpack-node-externals')
const pkg = require('./package')

module.exports = {
  entry: 'src/index.js',
  env: {
    AIMER_VERSION: pkg.version
  },
  html: false,
  sourceMap: false,
  minimize: false,
  filename: {
    css: 'aimer.css'
  },
  extendWebpack(config) {
    // Aimer always uses its own copy of Vue
    config.externals(
      externals({
        whitelist: ['vue', /\.(?!(?:jsx?|json)$).{1,5}$/i]
      })
    )
  }
}

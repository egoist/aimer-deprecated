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
  }
}

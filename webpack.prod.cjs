const path = require('path')

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.ts',
  output: {
    filename: 'audio.min.js',
    path: path.resolve(__dirname, './umd'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
}

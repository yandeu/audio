const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  entry: './src/index.ts',
  output: {
    filename: 'audio.dev.js',
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

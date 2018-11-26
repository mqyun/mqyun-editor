const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'example/example.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'example.bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.styl$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "stylus-loader"
      }]
    }, {
      test: require.resolve('jquery'),
      use: [{
        loader: 'expose-loader',
        options: '$'
      }, {
        loader: 'expose-loader',
        options: 'jQuery'
      }]
    }]
  }
}

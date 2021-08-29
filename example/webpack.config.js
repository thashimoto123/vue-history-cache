const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'build.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  performance: {
    hints: false
  },
  devtool: 'source-map',
  plugins: [
    new VueLoaderPlugin()
  ]
}

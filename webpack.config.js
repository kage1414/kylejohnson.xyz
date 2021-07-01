const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var SRC_DIR = path.join(__dirname, 'client', 'src');
var DIST_DIR = path.join(__dirname, 'client', 'dist');
console.log(SRC_DIR)

module.exports = {
  entry: `${SRC_DIR}/index.tsx`,
  context: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    clean: true
  },
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        exclude: [/node_modules/, /test/],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: [/node_modules/, /test/],
        use: ['babel-loader', 'source-map-loader']
      },
      {
        test: /\.css$/i,
        exclude: [/node_modules/, /test/],
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
  ]
};
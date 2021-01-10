import VueLoaderPlugin from 'vue-loader/lib/plugin'

const path = require('path')
module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader',
    }, {
      test: /\.css$/,
      use: ['vue-style-loader', {
        loader: 'css-loader',
        options: {
          esModule: false,
        },
      }],
    }],
  },
  plugins: [
    new VueLoaderPlugin() || null,
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
}
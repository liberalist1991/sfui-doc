const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const {
  VueLoaderPlugin
} = require('vue-loader');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    index: './example/src/pc/index.js',
    mobile: './example/src/mobile/index.js'
  },
  output: {
    path: path.join(__dirname, '../example/dist'),
    publicPath: '/',
    chunkFilename: '[name].js'
  },
  stats: {
    modules: false,
    children: false
  },

  serve: {
    open: true,
    host: '0.0.0.0',
    content: './example',
    devMiddleware: {
      logLevel: 'warn'
    },
    hotClient: {
      logLevel: 'warn',
      allEntries: true
    }
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      template: 'example/index.html',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['mobile'],
      template: 'example/index.html',
      filename: 'mobile.html',
      inject: true
    })
  ]
});

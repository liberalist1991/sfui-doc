const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
require('shelljs/global');

process.env.NODE_ENV = 'production';

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    vue: 'vue'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});

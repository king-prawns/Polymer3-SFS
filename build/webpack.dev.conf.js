const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = config.dev.env;

module.exports = merge(baseWebpackConfig, {
  entry: [
    'webpack-hot-middleware/client?reload=true&noInfo=true',
    './src/main.js'
  ],
  module: {
    rules: [utils.cssRules()]
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].js',
    publicPath: config.dev.assetsPublicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      disable: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      title: 'DEV - Polymer 3 App',
      inject: true
    })
  ]
});

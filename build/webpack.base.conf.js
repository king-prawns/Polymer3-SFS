const path = require('path');
const webpack = require('webpack');
const utils = require('./utils');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

process.noDeprecation = true;

module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      Components: path.resolve(__dirname, '../src/components'),
      '@': utils.resolve('src'),
      webpackGlobal: path.resolve(__dirname, './global')
    }
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: [utils.resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      webpackGlobal: 'webpackGlobal'
    }),
    new FaviconsWebpackPlugin('./favicon.png')
  ]
};

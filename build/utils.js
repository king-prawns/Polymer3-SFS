const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve(dir) {
    return path.join(__dirname, '..', dir);
  },
  assetsPath(_path) {
    const assetsPath =
      process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory;
    return path.posix.join(assetsPath, _path);
  },
  cssRules() {
    const isProd = process.env.NODE_ENV === 'production';
    const uses = [
      {
        loader: 'css-loader', // translates CSS into CommonJS
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader' // postprocesses CSS
      },
      {
        loader: 'resolve-url-loader' // resolves relative paths based on the original source file.
      }
    ];
    if (!isProd) {
      uses.unshift({
        loader: 'style-loader' // creates style nodes from JS strings
      });
    }
    return {
      test: /(\.css)$/,
      use: ExtractTextPlugin.extract({
        use: uses
      })
    };
  }
};

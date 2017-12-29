process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const opn = require('opn');
const express = require('express');
const chalk = require('chalk');
const config = require('../config');
const webpackConfig = require('./webpack.dev.conf');

const port = config.dev.port;
const autoOpenBrowser = config.dev.autoOpenBrowser;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  warn: false
});
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
const staticPath = config.dev.assetsSubDirectory;
app.use(express.static(staticPath));

const uri = `http://localhost:${port}`;

devMiddleware.waitUntilValid(() => {
  console.log(chalk.cyan(`> Listening at ${uri}\n`));
});

module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  if (autoOpenBrowser) {
    opn(uri);
  }
});

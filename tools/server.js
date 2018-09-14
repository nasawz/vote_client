const express = require('express');

const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const getConfig = require('./webpack-config');
const webpack = require('webpack');
const config = require('./config');

const proxy = require('http-proxy-middleware');

var options = {
  target: 'http://vote.baleina.cn/',
  secure: false,
  changeOrigin: true,
  ws: true,
  ignorePath: false,
  pathRewrite: {
    // '^/api': ''
  }
};

var webProxy = proxy(options);

function startDevServer() {
  const app = express();
  /*=============webpack start==============*/
  const devConfig = getConfig('dev');
  const compiler = webpack(devConfig);
  app.use(
    devMiddleware(compiler, {
      publicPath: devConfig.output.publicPath,
      historyApiFallback: true
    })
  );
  app.use(hotMiddleware(compiler));
  /*=============webpack end==============*/
  /*=============proxy start==============*/
  (() => {
    const proxy_options = {
      target: 'http://vote.baleina.cn/',
      // target: 'http://localhost:1337/',
      secure: false,
      changeOrigin: true,
      ws: true,
      ignorePath: false,
      pathRewrite: {
        // '^/api': ''
      }
    };
    const webProxy = proxy(proxy_options);
    app.use('/api/*', webProxy);
  })();
  // ---------------- //
  (() => {
    const proxy_options = {
      target: `http://localhost:${config.port}/`,
      secure: false,
      changeOrigin: true,
      ws: true,
      ignorePath: false,
      pathRewrite: {
        '^/VmAbYNivv5': ''
      }
    };
    const webProxy = proxy(proxy_options);
    app.use('/VmAbYNivv5/*', webProxy);
  })();
  /*=============proxy end================*/

  app.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`Dev server listening at http://localhost:${config.port}/`);
  });
}
startDevServer();

/* eslint-disable import/no-extraneous-dependencies, global-require */
import '@babel/register';
import express from 'express';
import serverRender from './serverRender';

const port = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require('../webpack.dev.config');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);

  app.use(devMiddleware(compiler, {
    noInfo: true,
    stats: {
      colors: true,
    },
    publicPath: config.output.publicPath,
  }));

  app.use(hotMiddleware(compiler));
}

app.use(express.static('public'));

app.get('*', serverRender);

app.listen(port, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Server listening: http://localhost:${port}`);
  }
});

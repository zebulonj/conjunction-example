import path from 'path';
import express from 'express';

import middleware from './webpack-dev-middleware';

import DocumentTemplate from './document';
import webpackConfig from '../webpack.config.dev';

import config from 'config';

import { assets } from 'lib/manifest';

import manifest from '../manifest.json';

const { scripts, stylesheets } = ( 'production' === process.env.NODE_ENV )
  ? assets(['vendor', 'main'], manifest )
  : { scripts: ['main.js'], stylesheets: [] };

const server = express();

server.disable( 'x-powered-by' );

server.use( express.static( path.resolve( __dirname, '../public' ) ) );

if ( 'production' !== process.env.NODE_ENV ) {
  server.use( middleware( webpackConfig, server ) );
}

server.use( ( req, res ) => {
  res.send( DocumentTemplate({
    config,
    scripts: scripts.map( href => '/' + href ),
    stylesheets: [
      ...stylesheets.map( href => '/' + href )
    ]
  }));
});

export default server;

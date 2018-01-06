import http from 'http';

import app from './server';

let current = app;
const server = http.createServer( current );

const PORT = process.env.APP_PORT || 9000;

server.listen( PORT, () => {
  console.log( `Listening on port ${ PORT }. ` );
});

if ( module.hot ) {
  console.log( 'Server-side HMR Enabled!' );

  module.hot.accept( './server', () => {
    console.log( 'HMR Reloading...' );

    const next = require( './server' ).default;

    server.removeListener( 'request', current );
    server.on( 'request', next );

    current = next;
  });
}

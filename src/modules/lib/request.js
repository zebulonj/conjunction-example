// Polyfill window.fetch(...).
import 'whatwg-fetch';

const headers = {
  'content-type': 'application/json',
  'accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
};

export const request = ( url, options = {} ) => fetch( url, { headers, credentials: 'same-origin', ...options })
  .then( res => {
    const { status, statusText, ok } = res;
    const token = res.headers.get( 'x-csrf-token' );

    if ( token ) {
      headers['X-CSRF-Token'] = token;
    }

    if ( ( res.headers.get( 'content-type' ) || "" ).match( /^application\/json/i ) ) {
      return res.json()
        .then( body => ({ body, status, statusText, ok }) )
    }

    return res;
  });

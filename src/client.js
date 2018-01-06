import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {
  Provider as ConjunctionProvider
} from '@tedconf/conjunction';

import { App } from 'App';

import { schema } from 'schema';

render(
  <ConjunctionProvider schema={ schema }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConjunctionProvider>,
  document.getElementById( 'content' )
);

if (module.hot) {
  module.hot.accept();
}

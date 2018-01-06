import React from 'react';
import { DataContainer } from '@tedconf/conjunction';

import './App.css';

const sessionQuery = {
  __fields: {
    user: {
      __args: {
        username: 'zebulonj'
      },
      __fields: {
        id: true,
        name: true,
        email: true
      }
    }
  }
};

export const App = () => (
  <DataContainer
    query={ sessionQuery }
    render={ ({ loaded, user }) => (
      <div>
        { !loaded && (
          <div>{ 'Loading...' }</div>
        )}
        { loaded && user && (
          <div>{ `Hello, ${ user.name }!` }</div>
        )}
      </div>
    )} />
);

import { ApolloProvider } from 'react-apollo';
import App from './App';
import React from 'react';
import { render } from 'react-dom';
import client from './graphql/apollo/client';

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootEl,
);

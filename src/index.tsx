import App from './App';
import React from 'react';
import { render } from 'react-dom';

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

render(<App />, rootEl);

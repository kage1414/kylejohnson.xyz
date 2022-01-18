import App from './App';
import { GlobalStyles } from './globalStyles';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App hello={'world'} />
  </React.StrictMode>,
  document.getElementById('root')
);
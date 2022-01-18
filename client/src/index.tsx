import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App hello={'world'} />
  </React.StrictMode>,
  document.getElementById('root')
);

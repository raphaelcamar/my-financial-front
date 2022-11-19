// import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';

import { Root } from './root';

// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

ReactDOM.render(<Root />, document.getElementById('main'));

if (import.meta.webpackHot.hot) {
  console.log('Entrou aqui');
  import.meta.webpackHot.hot.accept('./root.tsx', () => {
    const NewRoot = require('./root.tsx').default;
    ReactDOM.render(<NewRoot />, document.getElementById('main'));
  });
}

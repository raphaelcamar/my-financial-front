import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import { Root } from './root';

// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

ReactDOM.render(<Root />, document.getElementById('main'));

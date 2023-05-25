import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import { Root } from './root';
import { worker } from '@/core/presenters/request-interceptor';

if (process.env.API_MOCKING === 'enabled') {
  worker.start();
}

ReactDOM.render(<Root />, document.getElementById('main'));

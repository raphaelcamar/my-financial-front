import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { RootProviders } from './root-providers';
import { RootRoutesComponent } from '@/core/presenters/routes';
import { worker } from '@/core/presenters/request-interceptor';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.render(
  <BrowserRouter>
    <RootProviders>
      <RootRoutesComponent />
    </RootProviders>
  </BrowserRouter>,
  document.getElementById('main')
);

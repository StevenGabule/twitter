import React from 'react';
import { render } from 'react-dom';
import App from './App';
import AppProviders from './AppProviders';
import './styles/main.scss';

render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
);

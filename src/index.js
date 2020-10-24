import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

// import i18n (needs to be bundled ;))
import './i18n';

ReactDOM.render(
  <Suspense fallback="loading">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);

serviceWorker.unregister();

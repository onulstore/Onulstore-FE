import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './store';
import ScrollToTop from 'components/common/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <CookiesProvider>
        <ScrollToTop />
        <App />
      </CookiesProvider>
    </Provider>
  </BrowserRouter>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/es/integration/react';
import ScrollToTop from 'components/common/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CookiesProvider>
          <ScrollToTop />
          <App />
        </CookiesProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);

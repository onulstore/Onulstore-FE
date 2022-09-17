import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//styled-component
import theme from './assets/theme';
import { ThemeProvider } from 'styled-components';
//react-router-dom
import { BrowserRouter } from 'react-router-dom';
//react-redux
import { Provider } from 'react-redux';
import store from './stores/store';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

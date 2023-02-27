import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { store } from './store.js';
import { Provider } from 'react-redux';
import './style.sass';

store.subscribe(() => { console.log(store.getState()); });

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index';
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => { console.log(store.getState()); });

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
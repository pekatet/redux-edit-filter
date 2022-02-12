import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storeRT from './Slices/index'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRT}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css"
import stores  from './stores'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
    <App />
    <Toaster/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
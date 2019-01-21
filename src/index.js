import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { Provider } from 'react-redux';
import storeFactory from './store';
const store = storeFactory();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));


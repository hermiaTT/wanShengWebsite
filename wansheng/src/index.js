import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './App';
// import './i18n';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
        <BrowserRouter>
            <AppWrapper/>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>
    
    ,document.getElementById('root'));

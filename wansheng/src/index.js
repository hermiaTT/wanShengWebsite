import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './App';
// import './i18n';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppWrapper/>
        </BrowserRouter>
        </React.StrictMode>
    
    ,document.getElementById('root'));

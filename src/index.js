import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './assets/scss/main.scss';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode >,
    document.getElementById('root')
);
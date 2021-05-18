import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './assets/scss/main.scss';

import './i18n';

ReactDOM.render(
    <StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </StrictMode >,
    document.getElementById('root')
);
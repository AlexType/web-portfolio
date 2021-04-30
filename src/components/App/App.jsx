import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../containers/Header/Header';
import AppRouter from '../AppRouter/AppRouter';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <AppRouter />
            </main>
        </BrowserRouter>
    );
};

export default App;
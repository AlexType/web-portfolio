import React, { Fragment } from 'react';
import Header from '../../containers/Header/Header';
import Home from '../../pages/Home/Home';

const App = () => {
    return (
        <Fragment>
            <Header />
            <main className="main">
                <Home />
            </main>
        </Fragment>
    );
};

export default App;
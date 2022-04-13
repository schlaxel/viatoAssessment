import React from 'react';
import ReactDOM from 'react-dom';
import SiteWrapper from './siteWrapper';
import Header from './components/header';
import Buchungsformular from './components/buchungsformular';

const App = () => (
    <SiteWrapper>
        <Header />
        <Buchungsformular />
    </SiteWrapper>
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

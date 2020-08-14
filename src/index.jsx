import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

const outlet = document.getElementById('app');

const Main = () => (
    <App/>
);

ReactDOM.render(
    <Main />,
    outlet
);
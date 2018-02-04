import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Header from './components/header.js';

const render = () => {
    ReactDOM.render((
        <Header />
    ), document.getElementById('root'));
}
render();
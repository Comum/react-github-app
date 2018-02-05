import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './scss/_import.scss';

import Header from './components/header.js';
import Form from './components/form.js';

const render = () => {
    ReactDOM.render((
        <div>
            <Header />
            <Form />
        </div>
    ), document.getElementById('root'));
}
render();
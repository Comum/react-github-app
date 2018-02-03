import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const render = () => {
    ReactDOM.render((
        <div>React Works!</div>
    ), document.getElementById('root'));
}

render();
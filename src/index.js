import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';

import './scss/_import.scss';

import reducers from './reducers';
import GitHubHomeContainer from './containers/GitHubHomeContainer.js';

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    applyMiddleware(thunk)
);

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={GitHubHomeContainer}></Route>
        </HashRouter>
    </Provider>
), document.getElementById('root'));

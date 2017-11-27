require('./app.scss')

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import App from './containers/App';
import reducers from './reducers';

const combinedReducers = combineReducers(reducers);
const store = createStore(
    combinedReducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
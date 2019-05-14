import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import { friendList, postList } from './reducers'
import Routes from './components/Routes';

//logger for redux so it will log activites in browser console
const logger = createLogger()

//for reducers in reducers.js
const rootReducers = combineReducers({ friendList, postList })

//initialize store for reducers with loggers
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
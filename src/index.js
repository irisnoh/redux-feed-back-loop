import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, } from 'redux';

const formReducer = (state = {}, action) => {
    if (action.type === "GET_FEELING") {
        return {...state, feeling: action.payload}
    } 
    // else if (action.type === "GET_UNDERSTANDING") {
    //     return action.payload
    // } else if (action.type === 'GET_SUPPORT') {
    //     return action.payload
    // } else if (action.type === 'GET_COMMENTS') {
    //     return action.payload
    // } 
    return state
}

const adminReducer = (state = [], action) => {
    if (action.type === 'GET_ADMIN') {
        return [...action.payload];
    }
    return state
}
const storeInstance = createStore(
    combineReducers({
        formReducer,
        adminReducer
    }),
    // applyMiddleware(logger),
);


registerServiceWorker();

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

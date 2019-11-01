import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, } from 'redux';

const formReducer = (state =[], action)=>{
    if(action.type==="GET_FEELING"){
        return action.payload
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        formReducer,
    }),
    // applyMiddleware(logger),
);

registerServiceWorker();

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

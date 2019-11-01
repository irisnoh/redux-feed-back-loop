import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, } from 'redux';



const storeInstance = createStore(
    combineReducers({
  
    }),
    // applyMiddleware(logger),
);

registerServiceWorker();

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

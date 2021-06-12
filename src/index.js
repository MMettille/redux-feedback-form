import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// ⬇ The Reducers

const feelingRating = (state =[], action) => {
    if(action.type === 'ADD_FEELING'){
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

const understandingRating = (state =[], action) => {
    if(action.type === 'ADD_UNDERSTANDING'){
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

const supportedRating = (state =[], action) => {
    if(action.type === 'ADD_SUPPORTED'){
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

const comments = (state =[], action) => {
    if(action.type === 'ADD_COMMENTS'){
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

// ⬇ Creating our store
const store = createStore(
    combineReducers({
      // ⬇ Reducers go here
      feelingRating, understandingRating, supportedRating, comments
    }),
    applyMiddleware(
      logger
    )
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
    registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// ⬇ The Reducers

const userRating = (state =[], action) => {
    switch (action.type) {
        case 'ADD_FEELING': {
            console.log(action.payload)
            return [...state, action.payload]
        }
        case 'ADD_UNDERSTANDING': {
            console.log(action.payload)
            return [...state, action.payload]
        }
        case 'ADD_SUPPORTED': {
            console.log(action.payload)
            return [...state, action.payload]
        }
        case 'ADD_COMMENTS': {
            console.log(action.payload)
            return [...state, action.payload]
        }
        case 'CLEAR_REDUX': {
            return []
        }
        default:
            return state
    }
    // if(action.type === 'ADD_FEELING'){
    //     console.log(action.payload);
    //     return action.payload;
    // } if(action.type === 'REMOVE_FEELING'){
    //     return []
    // }
    return state;
}

// const understandingRating = (state =[], action) => {
//     if(action.type === 'ADD_UNDERSTANDING'){
//         console.log(action.payload);
//         return action.payload;
//     }if(action.type === 'REMOVE_UNDERSTANDING'){
//         return []
//     }
//     return state;
// }

// const supportedRating = (state =[], action) => {
//     if(action.type === 'ADD_SUPPORTED'){
//         console.log(action.payload);
//         return action.payload;
//     } if(action.type === 'REMOVE_SUPPORT'){
//         return []
//     }
//     return state;
// }

// const comments = (state =[], action) => {
//     if(action.type === 'ADD_COMMENTS'){
//         console.log(action.payload);
//         return action.payload;
//     } if(action.type === 'REMOVE_COMMENTS'){
//         return []
//     }
//     return state;
// }

// ⬇ Creating our store
const store = createStore(
    combineReducers({
      // ⬇ Reducers go here
    //   feelingRating, understandingRating, supportedRating, comments
      userRating
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

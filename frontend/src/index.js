import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import mainReducer from './Redux/Reducers/mainReducer'
import {createStore} from 'redux';
import {Provider} from 'react-redux'

let initialstate = {user : null, items: [], errorMessage: "", message: '', cartItems: []};

console.log()
const store = createStore(mainReducer,initialstate, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();

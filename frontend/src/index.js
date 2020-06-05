import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import mainReducer from './Redux/Reducers/mainReducer'
import {createStore} from 'redux';
import {Provider} from 'react-redux'


const store = createStore(mainReducer)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);


serviceWorker.unregister();

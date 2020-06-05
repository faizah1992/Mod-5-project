import { combineReducers } from "redux";
import itemsReducer from './itemReducer'
import userReducer from './userReducer'

const mainReducer = combineReducers({
    items: itemsReducer,
    user: userReducer,
  
});


export default mainReducer;
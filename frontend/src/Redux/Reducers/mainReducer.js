import { combineReducers } from "redux";
import itemsReducer from './itemReducer'

const mainReducer = combineReducers({
    items: itemsReducer
  
});


export default mainReducer;
import { combineReducers } from "redux";
import itemsReducer from './itemReducer'
import userReducer from './userReducer'

function mainReducer (currentState, action){
    currentState = itemsReducer(currentState,action)
    currentState = userReducer(currentState, action)
    return currentState
}

export default mainReducer;
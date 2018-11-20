import { combineReducers } from 'redux'
import chatMessageReducer from "./chatMessageReducer";

const rootReducer = combineReducers({
    messages: chatMessageReducer
})

export default rootReducer
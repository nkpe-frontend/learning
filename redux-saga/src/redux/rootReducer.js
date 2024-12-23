import { combineReducers } from "redux";
import counterReducer from "./products/reducer.js"
const rootReducer=combineReducers({
    counter:counterReducer
})
export default rootReducer;
import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./rootReducer.js";
import createSagaMiddleware from "redux-saga";
import saga from "./saga.js";
const middleware=createSagaMiddleware();
const store= legacy_createStore(rootReducer, applyMiddleware(middleware))
middleware.run(saga);

export default store;
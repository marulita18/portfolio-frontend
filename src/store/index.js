import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import winesReducer from "../store/wines/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

const store = createStore(
  combineReducers({
    wines: winesReducer,
  }),
  enhancer
);

export default store;

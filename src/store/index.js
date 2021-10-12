import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import winesReducer from "../store/wines/reducer";
import userReducer from "../store/user/reducer";
import appStateReducer from "../store/appState/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

const store = createStore(
  combineReducers({
    wines: winesReducer,
    user: userReducer,
    appState: appStateReducer,
  }),
  enhancer
);

export default store;

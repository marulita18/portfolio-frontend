import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import winesReducer from "../store/wines/reducer";
import userReducer from "../store/user/reducer";
import appStateReducer from "../store/appState/reducer";
import cartReducer from "../store/cart/reducer";
import orderReducer from "../store/orders/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

const store = createStore(
  combineReducers({
    wines: winesReducer,
    user: userReducer,
    appState: appStateReducer,
    cart: cartReducer,
    orders: orderReducer,
  }),
  enhancer
);

export default store;

import { showMessageWithTimeout } from "../appState/actions";
import axios from "axios";
import { apiUrl } from "../../config/constants";
export const CREATED_ORDER = "CREATED_ORDER";
export const ORDERS_FETCHED = "ORDERS_FETCHED";

export const createOrder = (data) => ({
  type: CREATED_ORDER,
  payload: data,
});

export function purchase() {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      const cart = getState().cart;
      console.log(cart);
      const response = await axios.post(
        `${apiUrl}/order`,
        { cart },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(createOrder(response.data));
      showMessageWithTimeout(
        "success",
        false,
        "Thank you for your purchase!",
        1500
      );
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const ordersFetched = (data) => {
  return {
    type: ORDERS_FETCHED,
    payload: data,
  };
};

export function fetchingOrders() {
  console.log("im here");
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/order`);
      console.log("my response", response.data);
      dispatch(ordersFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

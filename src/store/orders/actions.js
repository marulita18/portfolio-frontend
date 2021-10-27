import { showMessageWithTimeout } from "../appState/actions";
import axios from "axios";
import { apiUrl } from "../../config/constants";
import { emptyCart } from "../cart/actions";
export const CREATED_ORDER = "CREATED_ORDER";
export const ORDERS_FETCHED = "ORDERS_FETCHED";
export const UPDATED_ORDER = "UPDATED_ORDER";

export const createOrder = (data) => ({
  type: CREATED_ORDER,
  payload: data,
});

export function purchase() {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      const cart = getState().cart;
      const response = await axios.post(
        `${apiUrl}/order`,
        { cart },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      dispatch(createOrder(response.data));
      console.log("my response");
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Thank you for your purchase!",
          3000
        )
      );
      dispatch(emptyCart());
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
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/order`);
      dispatch(ordersFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const orderUpdated = (data) => {
  return {
    type: UPDATED_ORDER,
    payload: data,
  };
};

export function updatingOrders(data) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.patch(`${apiUrl}/order/${data.id}`, {
        data,
      });
      dispatch(orderUpdated(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

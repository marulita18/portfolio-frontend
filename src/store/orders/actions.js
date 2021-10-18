import { showMessageWithTimeout } from "../appState/actions";
import axios from "axios";
import { apiUrl } from "../../config/constants";
export const CREATED_ORDER = "CREATED_ORDER";

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

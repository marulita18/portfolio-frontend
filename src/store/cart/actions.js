import axios from "axios";
import { apiUrl } from "../../config/constants";
export const ADDED_TO_CART = "ADDED_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const toCart = (data) => ({
  type: ADDED_TO_CART,
  payload: data,
});

export const removeFromCart = () => ({
  type: REMOVE_FROM_CART,
});

export function purchase(data) {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      const response = await axios.post(
        `${apiUrl}/order`,
        { data },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (e) {
      console.log(e.message);
    }
  };
}

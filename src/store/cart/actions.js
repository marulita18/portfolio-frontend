import axios from "axios";
import { apiUrl } from "../../config/constants";
import { showMessageWithTimeout } from "../appState/actions";
export const ADDED_TO_CART = "ADDED_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const toCart = (data) => ({
  type: ADDED_TO_CART,
  payload: data,
});

export const removeFromCart = (data) => ({
  type: REMOVE_FROM_CART,
  payload: data,
});

import axios from "axios";
import { apiUrl } from "../../config/constants";
import { showMessageWithTimeout } from "../appState/actions";
export const START_LOADING = "START_LOADING";
export const WINES_FETCHED = "WINES_FETCHED";
export const WINE_ADDED = "WINE_ADDED";

export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};

export const winesFetched = (data) => {
  return {
    type: WINES_FETCHED,
    payload: data,
  };
};

export function fetchingWines() {
  return async (dispatch, getState) => {
    dispatch(startLoading);
    try {
      const response = await axios.get(`${apiUrl}/wines`);
      dispatch(winesFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

const wineAdded = (data) => ({
  type: WINE_ADDED,
  payload: data,
});

export function addWine(name, picture, price, description, categoryId) {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      const response = await axios.post(
        `${apiUrl}/wines`,
        {
          name,
          picture,
          price,
          description,
          categoryId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(wineAdded(response.data));
      dispatch(
        showMessageWithTimeout("success", false, "Auction created!", 1500)
      );
    } catch (e) {
      console.log(e.message);
    }
  };
}

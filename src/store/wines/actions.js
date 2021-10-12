import axios from "axios";
import { apiUrl } from "../../config/constants";
export const START_LOADING = "START_LOADING";
export const WINES_FETCHED = "WINES_FETCHED";

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
      const response = await axios.get(`http://localhost:4000/wines`);
      dispatch(winesFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

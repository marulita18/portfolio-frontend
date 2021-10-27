import axios from "axios";
import { apiUrl } from "../../config/constants";
import { showMessageWithTimeout } from "../appState/actions";
export const START_LOADING = "START_LOADING";
export const WINES_FETCHED = "WINES_FETCHED";
export const WINE_ADDED = "WINE_ADDED";
export const WINE_REMOVED = "WINE_REMOVED";
export const WINE_EDITED = "WINE_EDITED";
export const CATEGORIES_FETCHED = "CATEGORIES_FETCHED";
export const CATEGORY_ID_CHANGED = "CATEGORY_ID_CHANGED";

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

export function fetchingWines(categoryId) {
  return async (dispatch, getState) => {
    dispatch(startLoading);
    try {
      const response = await axios.get(
        `${apiUrl}/wines${categoryId ? "?categoryId=" + categoryId : ""}`
      );
      dispatch(winesFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const categoriesFetched = (data) => {
  return {
    type: CATEGORIES_FETCHED,
    payload: data,
  };
};

export function fetchingCategories() {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/wines/categories`);
      dispatch(categoriesFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

const categoryIdChanged = (data) => ({
  type: CATEGORY_ID_CHANGED,
  payload: data,
});

export function setCategoryId(categoryId) {
  return async (dispatch, getState) => {
    dispatch(categoryIdChanged(categoryId));
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
      dispatch(showMessageWithTimeout("success", false, "Thank you!", 1500));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const wineRemoved = (id) => {
  return {
    type: WINE_REMOVED,
    payload: id,
  };
};

export function removeWine(id) {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      const response = await axios.delete(`${apiUrl}/wines/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch(wineRemoved(id));
      dispatch(showMessageWithTimeout("success", false, "Wine removed", 1500));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const wineEdited = (data) => {
  return {
    type: WINE_EDITED,
    payload: data,
  };
};

export function editWine(data) {
  return async (dispatch, getState) => {
    console.log("our data", data);
    const token = getState().user.token;
    try {
      const response = await axios.put(
        `${apiUrl}/wines/${data.id}`,
        { data },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(wineEdited(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

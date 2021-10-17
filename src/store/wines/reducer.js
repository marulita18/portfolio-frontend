import {
  START_LOADING,
  WINES_FETCHED,
  WINE_ADDED,
  WINE_EDITED,
  CATEGORIES_FETCHED,
  CATEGORY_ID_CHANGED,
} from "./actions";

const initialState = {
  loading: true,
  all: [],
  categories: [],
  categoryId: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case WINES_FETCHED: {
      return {
        ...state,
        loading: false,
        all: payload,
      };
    }
    case CATEGORIES_FETCHED: {
      return {
        ...state,
        categories: payload,
      };
    }
    case WINE_ADDED: {
      return {
        loading: false,
        all: [...state, payload],
      };
    }
    case WINE_EDITED: {
      const newProduct = state.all.map((wine) => {
        return wine.id === payload.id;
      });
      return {
        ...state,
        all: [...state.all, newProduct],
      };
    }
    case CATEGORY_ID_CHANGED: {
      return {
        ...state,
        categoryId: payload,
      };
    }
    default: {
      return state;
    }
  }
}

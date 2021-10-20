import {
  START_LOADING,
  WINES_FETCHED,
  WINE_ADDED,
  WINE_EDITED,
  CATEGORIES_FETCHED,
  CATEGORY_ID_CHANGED,
  WINE_REMOVED,
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
      const updatedList = state.all.map((wine) => {
        if (wine.id === payload.id) {
          return payload;
        } else {
          return wine;
        }
      });
      return {
        ...state,
        all: updatedList,
      };
    }
    case CATEGORY_ID_CHANGED: {
      return {
        ...state,
        categoryId: payload,
      };
    }
    case WINE_REMOVED: {
      const filteredWines = state.all.filter((w) => w.id !== payload);
      return {
        ...state,
        all: filteredWines,
      };
    }
    default: {
      return state;
    }
  }
}

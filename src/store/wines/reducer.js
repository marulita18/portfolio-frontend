import {
  START_LOADING,
  WINES_FETCHED,
  WINE_ADDED,
  WINE_EDITED,
} from "./actions";

const initialState = {
  loading: true,
  all: [],
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
        loading: false,
        all: payload,
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

    default: {
      return state;
    }
  }
}

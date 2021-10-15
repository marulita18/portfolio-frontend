import { START_LOADING, WINES_FETCHED, WINE_ADDED } from "./actions";

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

    default: {
      return state;
    }
  }
}

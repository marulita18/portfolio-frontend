import { START_LOADING, WINES_FETCHED } from "./actions";

const initialState = {
  loading: true,
  wines: [],
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
        wines: payload,
      };
    }

    default: {
      return state;
    }
  }
}

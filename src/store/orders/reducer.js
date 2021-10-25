import { CREATED_ORDER, ORDERS_FETCHED } from "./actions";
const initialState = {
  all: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATED_ORDER: {
      console.log("reducer", payload);
      return {
        ...state,
        all: [...state.all, payload],
      };
    }
    case ORDERS_FETCHED: {
      return {
        ...state,
        all: payload,
      };
    }
    default: {
      return state;
    }
  }
}

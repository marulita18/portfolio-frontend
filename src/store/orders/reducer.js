import { CREATED_ORDER } from "./actions";
const initialState = {
  all: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATED_ORDER: {
      return {
        ...state,
        allOrders: [...state, payload],
      };
    }

    default: {
      return state;
    }
  }
}

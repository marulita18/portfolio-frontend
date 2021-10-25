import { CREATED_ORDER, ORDERS_FETCHED, UPDATED_ORDER } from "./actions";
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

    case UPDATED_ORDER: {
      const updatedStatus = state.all.map((s) => {
        if (s.id !== payload.id) {
          return s;
        } else {
          return payload;
        }
      });
      console.log("updated status", updatedStatus);
      return {
        ...state,
        all: updatedStatus,
      };
    }

    default: {
      return state;
    }
  }
}

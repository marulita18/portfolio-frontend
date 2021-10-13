import { ADDED_TO_CART } from "./actions";
import { REMOVE_FROM_CART } from "./actions";

const initialState = [];

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADDED_TO_CART: {
      // console.log("payload", payload);
      const itemExists = state.find((item) => {
        // console.log(
        //   `Is ${item.wineId} the same as ${payload.wineId}`,
        //   item.wineId === payload.wineId
        // );
        return item.wineId === payload.wineId;
      });
      // console.log("item exists?", itemExists);
      const updatedItem = itemExists
        ? { ...itemExists, amount: itemExists.amount + 1 }
        : { ...payload, amount: 1 };
      // console.log("Updated item", updatedItem);
      const newState = itemExists
        ? state.map((item) => {
            if (item.id !== itemExists.id) {
              return item;
            } else {
              return updatedItem;
            }
          })
        : [...state, updatedItem];
      console.log("my new state", newState);
      return newState;
    }

    // case  REMOVE_FROM_CART: {
    //   const itemToUpdate = state.find((item) => {
    //     return item.wineId === payload.wineId;
    //   });
    //   const updatedItem = itemToUpdate.amount - 1;
    //   if(itemToUpdate.amount === 0) {
    //     return state - itemToUpdate
    //   }
    //   return updatedItem
    // }
    default: {
      return state;
    }
  }
}

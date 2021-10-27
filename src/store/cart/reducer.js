import { ADDED_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./actions";

const initialState = [];

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case EMPTY_CART: {
      return [];
    }
    case ADDED_TO_CART: {
      const itemExists = state.find((item) => {
        return parseInt(item.wineId) === parseInt(payload.wineId);
      });
      const updatedItem = itemExists
        ? { ...itemExists, amount: itemExists.amount + 1 }
        : null;
      const newState = updatedItem
        ? state.map((item) => {
            if (parseInt(item.wineId) !== parseInt(itemExists.wineId)) {
              return item;
            } else {
              return updatedItem;
            }
          })
        : [...state, { ...payload, amount: 1 }];
      return newState;
    }

    case REMOVE_FROM_CART: {
      const itemToUpdate = state.find((item) => {
        return item.wineId === payload.wineId;
      });
      console.log("item to update", itemToUpdate);
      const updatedItem = itemToUpdate
        ? { ...itemToUpdate, amount: itemToUpdate.amount - 1 }
        : null;
      console.log("updatedItem", updatedItem);
      const newState =
        updatedItem && updatedItem.amount > 0
          ? state.map((item) => {
              if (item.wineId !== updatedItem.wineId) {
                return item;
              } else {
                return updatedItem;
              }
            })
          : updatedItem && updatedItem.amount <= 0
          ? state.filter((item) => {
              return item.wineId !== updatedItem.wineId;
            })
          : state;
      return newState;
    }
    default: {
      return state;
    }
  }
}

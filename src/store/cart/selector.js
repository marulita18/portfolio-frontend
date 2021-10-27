export const selectCart = (reduxstate) => reduxstate.cart;

export const getCartWithWines = (reduxState) => {
  const allWines = reduxState.wines.all;
  const cart = reduxState.cart;

  const fullCart = cart.map((item) => {
    return {
      ...item,
      allWines: allWines.find((wine) => wine.id === item.wineId),
    };
  });
  return fullCart;
};

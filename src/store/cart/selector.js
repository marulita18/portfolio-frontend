export const selectCart = (reduxstate) => reduxstate.cart;

export const getCartWithWines = (reduxState) => {
  // the wine list
  // the cart
  const allWines = reduxState.wines.all;
  const cart = reduxState.cart;

  const fullCart = cart.map((item) => {
    return {
      ...item,
      allWines: allWines.find((wine) => wine.id === item.wineId),
    };
  });
  console.log("full caart", fullCart);
  return fullCart;

  // [{ ...wine, quantity }, {}, {}]

  //   });
  //   console.log("wine", wine);
  //   return wine;
};

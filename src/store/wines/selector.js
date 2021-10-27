export const selectHomepageLoading = (reduxstate) => reduxstate.wines.loading;
export const selectHomepageWines = (reduxstate) => reduxstate.wines.all;
export const selectHomepageCategories = (reduxstate) =>
  reduxstate.wines.categories;
export const selectHomepageCategoryId = (reduxstate) =>
  reduxstate.wines.categoryId;

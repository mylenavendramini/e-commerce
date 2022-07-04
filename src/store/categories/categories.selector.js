import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.produtos;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.produtos
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (produtos) =>
    produtos.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

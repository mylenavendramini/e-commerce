import { createSelector } from "reselect";

const selectItemsReducer = (state) => state.items;

export const selectItems = createSelector(
  [selectItemsReducer],
  (itemsSlice) => itemsSlice.items
);

export const selectItemsMap = createSelector([selectItems], (items) =>
  items.reduce((acc, item) => {
    const { name, items } = item;
    acc[name.toLowerCase().split(" ").join("")] = items;
    return acc;
  }, {})
);

export const selectItemsIsLoading = createSelector(
  [selectItemsReducer],
  (itemsSlice) => itemsSlice.isLoading
);

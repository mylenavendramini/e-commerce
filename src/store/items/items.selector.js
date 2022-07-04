import { createSelector } from "reselect";

const selectItemsReducer = (state) => state.items;

export const selectItems = createSelector(
  [selectItemsReducer],
  (itemsSlice) => itemsSlice.items
);

export const selectItemsMap = createSelector([selectItems], (items) =>
  items.reduce((acc, item) => {
    const { title, items } = item;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

export const selectItemsIsLoading = createSelector(
  [selectItemsReducer],
  (itemsSlice) => itemsSlice.isLoading
);

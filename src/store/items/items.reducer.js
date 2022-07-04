import ITEMS_ACTION_TYPES from "./items.types";

export const ITEMS_INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
};

export const itemsReducer = (state = ITEMS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ITEMS_ACTION_TYPES.FETCH_ITEMS_START:
      return { ...state, isLoading: true };
    case ITEMS_ACTION_TYPES.FETCH_ITEMS_SUCCESS:
      return { ...state, items: payload, isLoading: false };
    case ITEMS_ACTION_TYPES.FETCH_ITEMS_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};

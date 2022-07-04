import ITEMS_ACTION_TYPES from "./items.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchItemsStart = () =>
  createAction(ITEMS_ACTION_TYPES.FETCH_ITEMS_START);

export const fetchItemsSuccess = (itemsArray) =>
  createAction(ITEMS_ACTION_TYPES.FETCH_ITEMS_SUCCESS, itemsArray);

export const fetchItemsFailed = (error) =>
  createAction(ITEMS_ACTION_TYPES.FETCH_ITEMS_FAILED, error);

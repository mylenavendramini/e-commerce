import { takeLatest, all, call, put } from "redux-saga/effects";

import { getProductsAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchItemsSuccess, fetchItemsFailed } from "./items.action";

import { ITEMS_ACTION_TYPES } from "./items.types";

export function* fetchItemsAsync() {
  try {
    // Anywhere you have a function and you want to turn it into an effect you essentially use the call() keyword.
    const itemsArray = yield call(getProductsAndDocuments, "products");
    yield put(fetchItemsSuccess(itemsArray));
  } catch (error) {
    yield put(fetchItemsFailed(error));
  }
}

export function* onFetchItems() {
  yield takeLatest(ITEMS_ACTION_TYPES.FETCH_ITEMS_START, fetchItemsAsync);
  // take is where we receive actions. takeLatest() means if you hear a bunch of the same action, give me the latest one.
}

export function* itemsSaga() {
  yield all([call(onFetchItems)]);
  // all() is an effect that says Hey, run everything inside and only complete when all of it is done.
  // Inside of this array inside of all() is where we are going to add our generators
}

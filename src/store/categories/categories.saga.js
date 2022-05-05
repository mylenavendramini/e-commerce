import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export function* fetchCategoriesAsync() {
  try {
    // Anywhere you have a function and you want to turn it into an effect you essentially use the call() keyword.
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
    // dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
    // dispatch(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
  // take is where we receive actions. takeLatest() means if you hear a bunch of the same action, give me the latest one.
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
  // all() is an effect that says Hey, run everything inside and only complete when all of it is done.
  // Inside of this array inside of all() is where we are going to add our generators
}

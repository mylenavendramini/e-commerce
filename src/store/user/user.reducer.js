// import { useReducer } from "react";
import USER_ACTION_TYPES from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  // with saga I need to add isLoading and error:
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      // with thunk: case USER_ACTION_TYPES.SET_CURRENT_USER:
      // Hey, give me the same values on the previous state object that you had (...state), but anything afterwards I'm going to overwrite. What cames afterwards? currentUser: payload
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return { ...state, error: payload };
    default:
      // Important: Actions pass to every single reducer. So every single reducer by default needs to return the previous state if none of the cases matched to the type.
      return state;
  }
};

import { combineReducers } from "redux";

// combineReducers is a method that allows us to create a final big reducer that we can use inside of our store by combining smaller reducers together.

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  produtos: categoriesReducer,
  cart: cartReducer,
});

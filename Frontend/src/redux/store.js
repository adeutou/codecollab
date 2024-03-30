import { configureStore } from "@reduxjs/toolkit";
import {  combineReducers } from "redux";
import {thunk} from "redux-thunk";
import {
  userReducerLogout,
  userReducerProfile,
  userReducerSignIn,
  userReducerSignUp,
} from "./reducers/userReducer.js";

// Combine reducers
const reducer = combineReducers({
  signIn: userReducerSignIn,
  signUp: userReducerSignUp,
  logOut: userReducerLogout,
  userProfile: userReducerProfile,
});

// Initial state
const initialState = {
  signIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk middleware
  devTools: true, // Enable Redux DevTools automatically
  // Pass the initial state here:
  initialState,
});

export default store;

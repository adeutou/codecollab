import {configureStore} from "@reduxjs/toolkit"
import {userSlice}  from "./features/userSlice"
import appApi  from "./services/appApi"
//import {  } from "@reduxjs/toolkit/query";

//persist our store
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import {thunk} from 'redux-thunk'

//reducers
const reducer = combineReducers({
    user: userSlice.reducer,
    [appApi.reducerPath]:appApi.reducer,
});

const persistConfig ={
    key:'root',
    storage,
    blacklist:[appApi.reducerPath],
};

//persist our store

const persistedReducer = persistReducer(persistConfig,reducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware, thunk), // Adjusted order
});






 export default store;
import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import userReducer from './User/UserSlice';
import storage from 'redux-persist/lib/storage'
import{  persistReducer, persistStore} from 'redux-persist';
 import cartReducer from './CartsItems/cartSlice';
import addressReducer from './AddressInfo/addressSlice'
import restaurantMenuSlice from './MenuInfo/restaurantMenuSlice ';
import starCounterSlice from './Star_Rating/starCounterSlice';

const rootReducer = combineReducers({
   user: userReducer,
   cart : cartReducer,
   address : addressReducer,
  menu : restaurantMenuSlice,
 star:starCounterSlice,
});
const persistConfig = {
  key:'root',
  storage,
  version: 1,
}
const prosistsReducer = persistReducer(persistConfig,rootReducer)
 const store = configureStore({
 reducer:prosistsReducer,
 middleware: (getDefaultMiddleware) =>
 getDefaultMiddleware({
  serializableCheck:false,
}),
 });

const persistor = persistStore(store);

 export  { store, persistor };
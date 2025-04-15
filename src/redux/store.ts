import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./categorySlice";
import { listCategorySlice } from "./ListCategorySlice";
import { fetchSlice } from "./fetchSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, // Importe REGISTER
} from 'redux-persist';
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['category', 'listCategory', 'fetch']
}

const rootReducer = combineReducers({
  category: categorySlice.reducer,
  listCategories: listCategorySlice.reducer,
  fetch: fetchSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignora estas ações específicas do redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Adicione REGISTER aqui
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
export const persistor = persistStore(store)
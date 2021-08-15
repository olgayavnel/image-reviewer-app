import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import imagesReducer from './slices/imagesSlice';
import buttonsReducer from './slices/buttonsSlice';

const rootReducer = combineReducers({
  images: imagesReducer,
  buttons: buttonsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

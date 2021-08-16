import { createStore, combineReducers, compose } from 'redux';
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

export const initializeStore = () => createStore(persistedReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));
export const persistor = persistStore(initializeStore());

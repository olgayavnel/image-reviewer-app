import imagesReducer from './slices/imagesSlice';
import buttonsReducer from './slices/buttonsSlice';
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

/** 1) configureStore function requires to pass in
 * a reducer argument. Each feature in the app might
 * have its own reducer function.
 */

/** 3) Passing in an object that says that we want to have a state.images section of
 * our Redux state object, and that we want the imagesReducer function to be in charge of
 * deciding of and how to update the state.images section whenever an action is dispatched.
 *
 * state.images is a separate "slice" of the Redux state.
 * Since imagesReducer is responsible for updating the state.images slice,
 * we refer to it as a "slice reducer" function.
 */

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

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// export const store = createStore(rootReducer);

// export const store = configureStore({
//   reducer: {
//     images: imagesReducer,
//   },
// });

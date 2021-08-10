import { configureStore } from '@reduxjs/toolkit';

import imagesReducer from '../features/imageReviewer/imagesSlice';

/** 1) configureStore function requires to pass in
 * a reducer argument. Each feature in the app might
 * have its own reducer function.
 */

export const store = configureStore({
  reducer: {
    /** 3) Passing in an object that says that we want to have a state.images section of
     * our Redux state object, and that we want the imagesReducer function to be in charge of
     * deciding of and how to update the state.images section whenever an action is dispatched.
     *
     * state.images is a separate "slice" of the Redux state.
     * Since imagesReducer is responsible for updating the state.images slice,
     * we refer to it as a "slice reducer" function.
     */
    images: imagesReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';

import imagesReducer from '../features/imageReviewer/imagesSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

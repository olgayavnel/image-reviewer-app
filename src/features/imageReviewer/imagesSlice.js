import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  approvedImageList: [],
  rejectedImageList: [],
  showButton: true,
};

/** A slice is a collection of Redux reducer logic
 * and actions for a single feature in our app.
 *
 * A function createSlice takes care of the work of generating
 * action type strings, action creator functions, and action objects */
const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    imageApproved(state, action) {
      state.approvedImageList.push(action.payload);
      console.log(
        '🚀 ~ file: imagesSlice.js ~ line 17 ~ imageApproved ~ action.payload',
        action.payload
      );
    },
    imageRejected(state, action) {
      state.rejectedImageList.push(action.payload);
      console.log(
        '🚀 ~ file: imagesSlice.js ~ line 21 ~ imageRejected ~ action.payload',
        action.payload
      );
    },
    buttonClicked(state) {
      state.showButton = false;
    },
  },
});

export const { imageApproved, imageRejected, buttonClicked } =
  imagesSlice.actions;

/** 2) Exporting a reducer function for the images logic.
 * We import this reducer function in the store.
 */
export default imagesSlice.reducer;

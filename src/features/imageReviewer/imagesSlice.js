import { createSlice } from '@reduxjs/toolkit';

// const initialState = [{ id: '1', title: 'image1' }];
const initialState = {
  approvedImageList: [],
  rejectedImageList: [],
  showButton: true,
};

/** A function createSlice takes care of the work of generating
 * action type strings, action creator functions, and action objects */
const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    imageApproved(state, action) {
      state.approvedImageList.push(action.payload);
    },
    imageRejected(state, action) {
      state.rejectedImageList.push(action.payload);
    },
    buttonClicked(state) {
      state.showButton = false;
    },
  },
});

export const { imageApproved, imageRejected, buttonClicked } =
  imagesSlice.actions;

export default imagesSlice.reducer;

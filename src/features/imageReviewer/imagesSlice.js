import { createSlice } from '@reduxjs/toolkit';

// const initialState = [{ id: '1', title: 'image1' }];
const initialState = {
  approvedImageList: [],
  rejectedImageList: [],
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
      console.log(
        '🚀 ~ file: imagesSlice.js ~ line 20 ~ imageRejected ~ action.payload',
        action.payload
      );
    },
  },
});

export const { imageApproved, imageRejected } = imagesSlice.actions;

export default imagesSlice.reducer;

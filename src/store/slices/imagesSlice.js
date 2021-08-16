import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  approvedImageList: [],
  rejectedImageList: [],
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    imageApproved(state, action) {
      const randomImageObject = action.payload;
      const randomImageId = randomImageObject.id;
      const approvedImageListIds = state.approvedImageList.map(
        (image) => image.id
      );

      if (!approvedImageListIds.includes(randomImageId)) {
        state.approvedImageList.push(randomImageObject);
      }
    },

    imageRejected(state, action) {
      const randomImageObject = action.payload;
      state.rejectedImageList.push(randomImageObject);
    },
  },
});

export const { imageApproved, imageRejected } = imagesSlice.actions;

export default imagesSlice.reducer;

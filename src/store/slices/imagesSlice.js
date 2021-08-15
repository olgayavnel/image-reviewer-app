import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const getImages = createAsyncThunk(
//   'images/getImages',
//   async () => {
//     return fetch(ENDPOINT).then((response) => {
//       return response.json()
//     })
//   }
// )

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

    // extraReducers: {
    //   [getImages.pending] : (state, action) => {
    //     state.isLoading = true
    //   },
    //   [getImages.fulfilled] : (state, {payload}) => {
    //     state.isLoading = false
    //     state.randomImage = payload
    //   }
    //   [getImages.rejected] : (state, action) => {
    //     state.isLoading = true
    //   }
    // }
  },
});

export const { imageApproved, imageRejected } = imagesSlice.actions;

export default imagesSlice.reducer;

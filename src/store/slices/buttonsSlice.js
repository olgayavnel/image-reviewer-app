import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showButton: true,
};

const buttonsSlice = createSlice({
  name: 'buttons',
  // The intial state value we pass for the reducers. A state the first time it gets called.
  initialState,
  reducers: {
    buttonClicked(state) {
      state.showButton = false;
    },
  },
});

export const { buttonClicked } = buttonsSlice.actions;

export default buttonsSlice.reducer;

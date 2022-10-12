import { createSlice } from '@reduxjs/toolkit';
import { getUser } from 'utils/Api/cartApi';

interface StateType {
  isLoding: boolean;
  userData: any;
}

const initialState: StateType = {
  isLoding: false,
  userData: {},
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export default cartSlice.reducer;

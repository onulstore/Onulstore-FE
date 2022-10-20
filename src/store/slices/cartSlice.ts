import { createSlice } from '@reduxjs/toolkit';
import { getUser, addCart, getCart } from 'utils/Api/cartApi';

interface StateType {
  isLoding: boolean;
  userData: any;
  cartList: any[];
}

const initialState: StateType = {
  isLoding: false,
  userData: {},
  cartList: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cartList = action.payload;
      console.log(state.cartList);
    });

    builder.addCase(addCart.fulfilled, (state, action) => {});
  },
});

export default cartSlice.reducer;

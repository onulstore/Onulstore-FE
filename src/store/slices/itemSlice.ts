import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface ItemType {
  isShowLargeCategoryModal: Boolean;
  LargeCategoryTitle: string;
}

const initialState: ItemType = {
  isShowLargeCategoryModal: true,
  LargeCategoryTitle: '',
};

const itemSlice = createSlice({
  name: 'itemSlice',
  initialState,
  reducers: {
    largeCategoryModalHandler: (state) => {
      state.isShowLargeCategoryModal = !state.isShowLargeCategoryModal;
    },
  },
});

export const { largeCategoryModalHandler } = itemSlice.actions;

export default itemSlice.reducer;

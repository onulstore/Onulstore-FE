import { createSlice } from '@reduxjs/toolkit';
import { getSearch } from 'utils/Api/searchApi';

interface StateType {
  isLoding: boolean;
  searchData: any;
}

const initialState: StateType = {
  isLoding: false,
  searchData: [],
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearch.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(getSearch.fulfilled, (state, { payload }) => {
      state.isLoding = false;
      state.searchData = payload;
    });
    builder.addCase(getSearch.rejected, (state) => {
      state.isLoding = false;
    });
  },
});

export default searchSlice.reducer;

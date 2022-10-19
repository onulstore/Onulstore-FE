import { createSlice } from '@reduxjs/toolkit';
import { getCurations } from 'utils/Api/curationApi';

interface StateType {
  curationsData: any;
}

const initialState: StateType = {
  curationsData: {},
};

const curationsSlice = createSlice({
  name: 'curationSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurations.fulfilled, (state, { payload }) => {
      state.curationsData = payload;
    });
  },
});

export default curationsSlice.reducer;

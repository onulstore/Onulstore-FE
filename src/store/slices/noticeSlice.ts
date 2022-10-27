import { createSlice } from '@reduxjs/toolkit';
import { getNotice } from 'utils/Api/noticeApi';

interface Notice {
  createdDate: string;
  updatedDate: string;
  id: number;
  title: string;
  content: string;
  noticeImg: string;
}

interface StateType {
  noticesData: any;
  homeBannerData: any;
}

const initialState: StateType = {
  noticesData: [],
  homeBannerData: [],
};

const noticeSlice = createSlice({
  name: 'noticeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotice.fulfilled, (state, { payload }) => {
      // notice 전체
      state.noticesData = payload;
      // notice 중 home banner
      state.homeBannerData = state.noticesData.filter(
        (banner: Notice) => banner.title === 'Home Banner',
      );
    });
  },
});

export default noticeSlice.reducer;

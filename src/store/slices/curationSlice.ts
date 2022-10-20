import { createSlice } from '@reduxjs/toolkit';
import { getCurations, getMagazine, getRecommend } from 'utils/Api/curationApi';

interface Curation {
  display: boolean;
  curationForm: string;
}

interface StateType {
  curationsData: any;
  magazineInHomePage: any;
  recommendInHomePage: any;
}

const initialState: StateType = {
  curationsData: [],
  magazineInHomePage: [],
  recommendInHomePage: [],
};

const curationsSlice = createSlice({
  name: 'curationSlice',
  initialState,
  reducers: {
    displayMagazine: (state) => {
      state.magazineInHomePage = state.curationsData.filter(
        (curation: Curation) => curation.display === true && curation.curationForm === 'MAGAZINE',
      );
    },
    displayRecommend: (state) => {
      state.recommendInHomePage = state.curationsData.filter(
        (curation: Curation) => curation.display === true && curation.curationForm === 'RECOMMEND',
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurations.fulfilled, (state, { payload }) => {
      state.curationsData = payload;
    });
  },
});

export default curationsSlice.reducer;
export const { displayMagazine, displayRecommend } = curationsSlice.actions;

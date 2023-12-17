import { createSlice } from '@reduxjs/toolkit';
import { getCurations } from 'utils/Api/curationApi';

interface Curation {
  display: boolean;
  curationForm: string;
}

interface StateType {
  curationsData: any;
  magazineData: any;
  recommendData: any;
  magazineInHomePage: any;
  recommendInHomePage: any;
}

const initialState: StateType = {
  curationsData: [],
  magazineData: [],
  recommendData: [],
  magazineInHomePage: [],
  recommendInHomePage: [],
};

const curationsSlice = createSlice({
  name: 'curationSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurations.fulfilled, (state, { payload }) => {
      // curations 전체
      state.curationsData = payload;
      // curations 중 magazine
      state.magazineData = state.curationsData.filter(
        (curation: Curation) => curation.curationForm === 'MAGAZINE',
      );
      // magazine 중 Home page display data
      state.magazineInHomePage = state.magazineData.filter(
        (curation: Curation) => curation.display === true,
      );
      // curations 중 recommend(our picks)
      state.recommendData = state.curationsData.filter(
        (curation: Curation) => curation.curationForm === 'RECOMMEND',
      );
      // recommend(our picks) 중 Home page display data
      state.recommendInHomePage = state.recommendData.filter(
        (curation: Curation) => curation.display === true,
      );
    });
  },
});

export default curationsSlice.reducer;

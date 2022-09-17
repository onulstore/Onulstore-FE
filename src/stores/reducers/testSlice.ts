import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//API 로직
import { getUser, postUser } from '../api/index';
//API return값에 대한 type

interface StateType {
  count: number;
  testList: Array<IuserList>;
  isLoding: 'nomal' | 'pending' | 'success' | 'reject';
}

export interface IuserList {
  id: string;
  name: string;
  password: string;
}

const initialState: StateType = {
  count: 1,
  testList: [],
  isLoding: 'nomal',
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    increase(state) {
      state.count += 1;
    },
  },
  extraReducers: (builder) => {
    //GET
    builder.addCase(getUser.fulfilled, (state, action: PayloadAction<IuserList[]>) => {
      state.isLoding = 'success';
      state.testList = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isLoding = 'reject';

      // state.testList = state.testList.concat(action.payload);
    });
    //POST
    builder.addCase(postUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoding = 'success';
      state.testList = state.testList.concat(action.payload);
      console.log(state.testList);
    });
    builder.addCase(postUser.rejected, (state) => {
      state.isLoding = 'reject';
    });
  },
});

export const { increase } = testSlice.actions;

export default testSlice.reducer;

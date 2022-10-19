import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addQuestion, QuestionType, getAllQuestion } from 'utils/Api/QnA_Api';

interface StateType {
  isLoding: boolean;
}

const initialState: StateType = {
  isLoding: false,
};

const QnASlice = createSlice({
  name: 'qNaSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //addQuestion
    builder.addCase(addQuestion.pending, (state) => {
      state.isLoding = true;
    }),
      builder.addCase(addQuestion.fulfilled, (state, action: PayloadAction<QuestionType>) => {
        state.isLoding = false;
        console.log(action.payload);
      });
    builder.addCase(addQuestion.rejected, (state) => {
      state.isLoding = false;
    });
    //
    builder.addCase(getAllQuestion.pending, (state) => {
      state.isLoding = true;
    }),
      builder.addCase(getAllQuestion.fulfilled, (state, action: PayloadAction<QuestionType>) => {
        state.isLoding = false;
        console.log(action.payload);
      });
    builder.addCase(getAllQuestion.rejected, (state) => {
      state.isLoding = false;
    });
  },
});

export default QnASlice.reducer;

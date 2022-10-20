import QnA from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

//get
const getAllQuestion = createAsyncThunk('QnASlice/getAllQuestion', async (productId: number) => {
  const { data } = await QnA({
    method: 'GET',
    url: `/questions/${productId}`,
  });

  return data;
});

const getSingleQuestion = createAsyncThunk(
  'QnASlice/getSingleQuestion',
  async (productId: number) => {
    const { data } = await QnA({
      method: 'GET',
      url: `/questions/${productId}`,
    });
    return data;
  },
);

// post
export interface QuestionType {
  secret: boolean;
  content: string;
  productId: number;
  title: string;
}
const addQuestion = createAsyncThunk('QnASlice/addQuestion', async (payload: QuestionType) => {
  const { secret, content, productId, title } = payload;
  const { data } = await QnA({
    method: 'POST',
    url: '/questions',
    data: {
      secret,
      content,
      productId,
      title,
    },
  });
  return data;
});

//put
const editQuestion = createAsyncThunk('QnASlice/deleteQuestion', async (questionId: string) => {
  const { data } = await QnA({
    method: 'PUT',
    url: `/questions/${questionId}`,
  });
  return data;
});

//delete
const deleteQuestion = createAsyncThunk('QnASlice/deleteQuestion', async (questionId: string) => {
  const { data } = await QnA({
    method: 'DELETE',
    url: `/questions/${questionId}`,
  });
});

//Answer

interface IallAnswerId {
  questionId: string;
  answerId: string;
}

const getAllAnswer = createAsyncThunk('QnASlice/getAllAnswer', async (payload: IallAnswerId) => {
  const { questionId, answerId } = payload;
  const { data } = await QnA({
    method: 'GET',
    url: `/questions/${questionId}/answers/${answerId}`,
  });
  return data;
});

export { addQuestion, getAllQuestion };

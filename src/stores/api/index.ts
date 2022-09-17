import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IuserList } from '../reducers/testSlice';
const headers = {
  'content-type': 'application/json',
};

const getUser = createAsyncThunk('testSlice/getUser', async () => {
  const { data } = await axios({
    method: 'GET',
    url: 'http://localhost:4000/user',
    headers,
  });
  return data;
});

const postUser = createAsyncThunk('testSlice/postUser', async (payload: IuserList) => {
  const { id, name, password } = payload;
  const { data } = await axios({
    method: 'POST',
    url: 'http://localhost:4000/user',
    headers,
    data: {
      id,
      name,
      password,
    },
  });
  return data;
});

export { getUser, postUser };

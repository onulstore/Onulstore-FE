import { createAsyncThunk } from '@reduxjs/toolkit';
import { useCookies } from 'react-cookie';
import { useAppDispatch } from 'store/hooks';
import { setUserInfo } from 'store/slices/userSlice';
import api from '.';

const getUserInfo = createAsyncThunk('userSlice/getUserInfo', async () => {
  const [cookie, setCookie] = useCookies();
  const dispatch = useAppDispatch();

  const { data } = await api({
    url: 'members',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${cookie.accessToken}`,
    },
  });
  dispatch(setUserInfo(data));
});

// 사용 x

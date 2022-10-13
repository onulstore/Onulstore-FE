import axios from 'axios';
import { Cookies } from 'react-cookie';
import { refresh } from 'utils/authUtils';

const cookies = new Cookies();

const getCookie = (name: string) => {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const api = axios.create({
  baseURL: 'http://15.164.124.56/',
  headers: {
    'content-type': 'application/json',
    Authorization: `${document.cookie ? `Bearer ${getCookie('accessToken')}` : ''}`,
  },
});

api.interceptors.request.use(
  (config) => {
    const token = cookies.get('accessToken');
    // if (!config.headers['Authorization']) {
    //   config.headers['Authorization'] = `Bearer ${user?.token}`;
    // }
    // return config;
    config.headers = {
      Authorization: ` bearer ${token}`,
    };
    return config;
  },
  (err) => Promise.reject(err),
);

api.interceptors.response.use(
  (config) => {
    console.log(config);

    return config;
  },
  async (error) => {
    alert('해당 페이지에 문제가 있습니다! Q&N에 문의 해 주세요!');
    const prevRequest = error?.config;
    if (error?.response?.status === 403 && !prevRequest?.sent) {
      prevRequest.sent = true;
      const newAccessToken = await refresh();
      console.log('New Access Token is', newAccessToken);
      console.log('Previous request', prevRequest);
      prevRequest.headers['Authorization'] = `Bearer ${newAccessToken.payload}`;
      return;
    }
    return Promise.reject(error);
  },
);

export default api;

import axios from 'axios';

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

api.interceptors.response.use(
  (config) => {
    console.log(config);

    return config;
  },
  (err) => {
    alert('해당 페이지에 문제가 있습니다! Q&N에 문의 해 주세요!');
    return Promise.reject(err);
  },
);

export default api;

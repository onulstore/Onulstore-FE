import axios from 'axios';
import { refresh } from 'utils/authUtils';

const api = axios.create({
  baseURL: 'http://onulstore.dlcpop.com/',
  headers: {
    'content-type': 'application/json',
    // 'Authorization' :
  },
});

// api.interceptors.request.use(
//   (config) => {
//     if (!config.headers['Authorization']) {
//       config.headers['Authorization'] = `Bearer ${user?.token}`;
//     }
//     return config;
//   },
//   (err) => Promise.reject(err),
// );

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

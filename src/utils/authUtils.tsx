import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import api from './Api';

export const authCheck = async (token: string) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  // 페이지에 들어올때 쿠키로 사용자 체크
  // const token = cookies.accessToken;
  console.log(token);
  const res = await api({
    url: 'members',
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });

  return res.status;
  // if (res.status === 401) {
  //   alert('회원가입 시 이용 가능합니다.');
  //   navigate('/signup');
  // }
};

export const refresh = async () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const response = await api({
    url: 'auth/refresh',
    method: 'POST',
    data: {
      accessToken: cookies.accessToken,
      refreshToken: cookies.refreshToken,
    },
  });
  console.log('AuthService: refresh response is', response.data.accessToken);
  return response.data.accessToken;
};

export const logOut = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  removeCookie('accessToken');
  removeCookie('refreshToken');
  navigate(0); // 새로고침
};

import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import api from './Api';

export const authCheck = async (token: string) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  // 페이지에 들어올때 쿠키로 사용자 체크
  // const token = cookies.accessToken; // 쿠키에서 accessToken 를 꺼내기
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

export const logOut = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  removeCookie('accessToken'); // 쿠키를 삭제
  removeCookie('refreshToken'); // 쿠키를 삭제
  navigate('/'); // 메인 페이지로 이동
};

// export const LoginLayout = () => {
//   const [cookies] = useCookies();
//   const cookieValue = Object.values(cookies);

//   return (
//     <div>
//       {cookieValue[0] === 'undefined' || cookieValue[0] === undefined ? (
//         <Navigate to="/" />
//       ) : (
//         <Outlet />
//       )}
//     </div>
//   );
// };

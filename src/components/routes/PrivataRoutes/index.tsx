import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const [cookies] = useCookies();

  console.log(cookies);

  if (cookies.accessToken) {
    return <Outlet />;
  } else {
    alert('로그인 시 사용 가능합니다');
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;

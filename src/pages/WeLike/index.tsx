import { Outlet } from 'react-router-dom';
import WeLikeNavBar from 'components/weLike/WeLikeNavBar';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

function WeLike() {
  return (
    <div>
      <WeLikeNavBar />
      <Outlet />
    </div>
  );
}

export default SetHeaderBar(SetBottomTabBar(WeLike));

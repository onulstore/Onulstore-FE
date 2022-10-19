import TodayBanner from 'components/today/TodayBanner';
import TodayItems from 'components/today/TodayItems';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';
import { TODAY_ITEMS } from 'utils/test_constants';

function Today() {
  return (
    <div>
      <TodayBanner />
      <TodayItems data={TODAY_ITEMS} />
    </div>
  );
}

export default SetHeaderBar(SetBottomTabBar(Today));

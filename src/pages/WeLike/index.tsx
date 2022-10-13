import React from 'react';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

function WeLike() {
  return <div>WeLike</div>;
}

export default SetHeaderBar(SetBottomTabBar(WeLike));

import React from 'react';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

function Today() {
  return <div>Today</div>;
}

export default SetHeaderBar(SetBottomTabBar(Today));

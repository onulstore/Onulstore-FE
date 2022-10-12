import React from 'react';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

function Recent() {
  return <div>Recent</div>;
}

export default SetHeaderBar(SetBottomTabBar(Recent));

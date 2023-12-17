import React from 'react';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

function NotFound() {
  return <div>NotFound</div>;
}

export default SetHeaderBar(SetBottomTabBar(NotFound));

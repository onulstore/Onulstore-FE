import React from 'react';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

function Home() {
  return <div>Home</div>;
}

export default SetHeaderBar(SetBottomTabBar(Home));

import React from 'react';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

const WishList = () => {
  return <div></div>;
};

export default SetHeaderBar(SetBottomTabBar(WishList));

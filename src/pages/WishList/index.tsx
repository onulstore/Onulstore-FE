import React from 'react';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

function WishList() {
  return <div>WishList</div>;
}

export default SetHeaderBar(SetBottomTabBar(WishList));

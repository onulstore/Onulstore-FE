import React, { useCallback, useEffect } from 'react';
import ItemAlbum from 'components/item/ItemAlbum';
import api from 'utils/Api';
import * as S from './style';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

function Recent() {
  const getMyRecent = useCallback(async () => {
    const res = await api({
      url: 'members/latest',
      method: 'GET',
    });
    console.log(res);
  }, []);
  useEffect(() => {
    getMyRecent();
  }, []);

  return (
    <div>
      <S.TopBar>
        <p className="total-count">총 11 개</p>
      </S.TopBar>
      {/* <ItemAlbum /> */}
    </div>
  );
}

export default SetHeaderBar(SetBottomTabBar(Recent));

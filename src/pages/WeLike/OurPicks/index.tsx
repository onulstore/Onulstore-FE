import OurPicksList from 'components/weLike/OurPicksList';
import { OUR_PICKS } from 'utils/test_constants';
import React from 'react';
import * as S from './style';

function OurPicks() {
  return (
    <S.OurPicks>
      <h1>OUR PICKS</h1>
      <OurPicksList data={OUR_PICKS} index={0} />
      <OurPicksList data={OUR_PICKS} index={1} />
    </S.OurPicks>
  );
}

export default OurPicks;

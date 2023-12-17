import React from 'react';
import * as S from './style';
import Instagramimg1 from 'assets/images/instagram_1.png';
import Instagramimg2 from 'assets/images/instagram_2.png';
import Instagramimg3 from 'assets/images/instagram_3.png';

function Instargram() {
  return (
    <S.Instargram>
      <img src={Instagramimg1} alt="Instagramimg1" />
      <img src={Instagramimg2} alt="Instagramimg2" />
      <img src={Instagramimg3} alt="Instagramimg3" />
    </S.Instargram>
  );
}

export default Instargram;

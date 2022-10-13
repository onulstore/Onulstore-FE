import React from 'react';
import * as S from './style';
import todayBanner from 'assets/images/today_banner_img.png';
import { getTomorrowDate } from 'components/home/Date/getDate';
import TodayTimer from 'components/home/TodayTimer';

function TodayBanner() {
  return (
    <S.TodayBanner>
      <div className="img-container">
        <img src={todayBanner} alt="today-banner" />
      </div>
      <div className="time-container">
        <div className="time">
          <TodayTimer fontSize={6} tomorrow={getTomorrowDate()} />
          <span>HURRY!</span>
        </div>
        <p>
          오늘 상점의 추천 아이템을
          <br /> 24시간동안 특별한 가격으로 만나보세요!
        </p>
      </div>
    </S.TodayBanner>
  );
}

export default TodayBanner;

import React from 'react';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';
import SetBottomTabBar from 'utils/HOC/SetBottomBar';
import { BANNER, TODAY_ITEMS, OUR_PICKS, ITEMS } from 'utils/test_constants';
import * as S from './style';
import { BannerSwiper, JustForTodaySwiper } from 'components/home/Swiper';
import ScrollNavBar from 'components/home/ScrollNavBar';
import Section from 'components/home/Section';
import TodayTimerClock from 'components/home/TodayTimerClock';
import { MagazineList } from 'components/weLike/MagazineList';
import { OurPicksItemCard } from 'components/item/SmallItemCards';
import { OurPicksSwiper } from 'components/home/Swiper/OurPicksSwiper';
import Footer from 'components/home/Footer';
import TodayTimeBar from 'components/home/TodayTimeBar';
import TodayTrend from 'components/home/TodayTrend';

function Home() {
  return (
    <S.Home>
      <TodayTimeBar />
      <BannerSwiper data={BANNER} />
      <div className="scroll-nav-bar">
        <ScrollNavBar />
      </div>
      <Section title={'오늘만 할인'} fontSize={1.7}>
        <TodayTimerClock />
        <JustForTodaySwiper data={TODAY_ITEMS} />
      </Section>
      <div className="magazine">
        <Section title={'MAGAZINE'}>
          <MagazineList data={ITEMS[0]} home />
        </Section>
      </div>
      <Section title={'OUR PICKS'}>
        <OurPicksSwiper data={OUR_PICKS[0]} />
        <OurPicksItemCard data={ITEMS[0]} />
      </Section>
      <div className="trend">
        <Section title={'TODAY’s TREND'}>
          <TodayTrend />
        </Section>
      </div>

      <Footer />
    </S.Home>
  );
}

export default SetHeaderBar(SetBottomTabBar(Home));

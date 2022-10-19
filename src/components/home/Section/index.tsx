import { AngleRightIcon } from 'components/Icons';
import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';
import theme from 'style/theme';
import { SectionProps, SectionTitleProps } from '../home';

const SectionTitle = ({ title, instar, fontSize }: any) => {
  return (
    <S.SectionTile fontSize={fontSize}>
      {title}
      {instar ? (
        <AngleRightIcon color="#fff" width={'0.8rem'} height={'1.5rem'} />
      ) : (
        <AngleRightIcon color={theme.palette.black} width={'0.7rem'} height={'1.4rem'} />
      )}
    </S.SectionTile>
  );
};

function Section(props: any) {
  return (
    <S.Section>
      <SectionTitle {...props} />
      {props.children}
    </S.Section>
  );
}

export default Section;

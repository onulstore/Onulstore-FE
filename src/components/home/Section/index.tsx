import { AngleRightIcon } from 'components/Icons';
import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';
import theme from 'style/theme';
import { SectionProps, SectionTitleProps } from '../home';

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <S.SectionTile>
      {title}
      <AngleRightIcon color={theme.palette.black} width={'0.7rem'} height={'1.4rem'} />
    </S.SectionTile>
  );
};

function Section({ title, children }: SectionProps) {
  return (
    <S.Section>
      <SectionTitle title={title} />
      {children}
    </S.Section>
  );
}

export default Section;

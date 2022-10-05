import SmallBtn from 'components/ui/SmallBtn';
import React from 'react';
import * as S from './style';

interface Props {
  name?: string;
  label?: string;
  content?: string;
  btn: string;
}
function MyInfoForm({ name, label, content, btn }: Props) {
  return (
    <S.FormBox>
      {name && <S.UserName>{name}</S.UserName>}
      {label && <S.Label>{label}</S.Label>}
      {content && <S.Content>{content}</S.Content>}
      <S.Btn label={label}>{btn}</S.Btn>
    </S.FormBox>
  );
}

export default MyInfoForm;

import { ArrowLeftIcon, SearchIcon } from 'components/Icons';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import theme from 'style/theme';
import * as S from './style';

function SearchHeader({ setSearched }: any) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async ({ searchValue }: any) => {
    setSearched((prev: string[]) => [...prev, searchValue]);
  };
  return (
    <S.HeaderBar>
      <S.HeaderLeft onClick={() => navigate(-1)}>
        <ArrowLeftIcon />
      </S.HeaderLeft>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.SearchInput
          type="text"
          placeholder="검색어를 입력하세요."
          {...register('searchValue', { required: true })}
        />
        <button type="submit">
          <SearchIcon color={theme.palette.midGrey} />
        </button>
      </form>
    </S.HeaderBar>
  );
}

export default SearchHeader;

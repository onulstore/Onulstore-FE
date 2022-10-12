import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import theme from 'style/theme';
import * as S from './style';
import { ArrowLeftIcon, SearchIcon } from 'components/Icons';
import { useGoSearchResults } from '../hooks';

function SearchHeader() {
  const navigate = useNavigate();
  const goSearchResult = useGoSearchResults();
  const { register, handleSubmit } = useForm();
  const onSubmit = async ({ searchValue }: any) => {
    goSearchResult(searchValue);
  };
  return (
    <S.HeaderBar>
      <S.HeaderLeft onClick={() => navigate(-1)}>
        <ArrowLeftIcon />
      </S.HeaderLeft>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.SearchInput
          maxLength={20}
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

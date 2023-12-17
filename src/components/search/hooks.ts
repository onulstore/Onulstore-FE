import { useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function useSearchResult() {
  const [searchParams] = useSearchParams();
  const searchResult = searchParams.get('q')?.slice(0, 20) ?? '';
  return searchResult;
}
export function useGoSearchResults() {
  const navigate = useNavigate();
  const result = useCallback(
    (searchValue: string) => navigate(`results?q=${searchValue}`),
    [navigate],
  );
  return result;
}

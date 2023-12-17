import { AngleRightIcon } from 'components/Icons';
import { useNavigate } from 'react-router-dom';
import theme from 'style/theme';
import * as S from './style';

interface Props {
  path: string;
  name: string;
  count: number;
  last?: boolean | undefined;
}
function MyHistoryDetail({ path, name, count, last }: Props) {
  const navigate = useNavigate();
  return (
    <S.Container
      last={last}
      onClick={() => {
        navigate(`/${path}`);
      }}
    >
      <div className="page-name">{name}</div>
      <div className="count">{count}개</div>

      <AngleRightIcon color={theme.palette.main} width="6" height="10" />
    </S.Container>
  );
}

export default MyHistoryDetail;

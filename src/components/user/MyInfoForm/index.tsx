import { useNavigate } from 'react-router-dom';
import * as S from './style';

interface Props {
  firstName?: string;
  lastName?: string;
  label?: string;
  content?: string;
  btn: string;
  path: string;
}
function MyInfoForm({ firstName, lastName, label, content, btn, path }: Props) {
  const navigate = useNavigate();
  return (
    <S.FormBox
      onClick={() => {
        navigate(`/${path}`);
      }}
    >
      {lastName && (
        <div className="name-wrapper">
          {lastName && <div className="name">{lastName}</div>}
          {firstName && <div className="name">{firstName}</div>}
        </div>
      )}
      {label && <S.Label>{label}</S.Label>}
      {content && <S.Content>{content}</S.Content>}
      <S.Btn label={label}>{btn}</S.Btn>
    </S.FormBox>
  );
}

export default MyInfoForm;

import { CloseIcon, SettingsIcon } from 'components/Icons';
import { useNavigate } from 'react-router-dom';
import { useUserSlice } from 'store/hooks';
import { MenuOpenProps } from '..';
import * as S from './style';

const UserNameContainer = ({ isOpen, setIsOpen }: MenuOpenProps) => {
  const { lastName, firstName } = useUserSlice();
  const navigate = useNavigate();
  return (
    <S.UserNameWrapper>
      {lastName ? (
        <div className="user-name">
          <span>{lastName}</span>
          <span>{firstName}</span>님
        </div>
      ) : (
        <span>로그인이 필요합니다.</span>
      )}
      <div className="icon-wrapper">
        <i
          onClick={() => {
            navigate('/useredit');
            setIsOpen(!isOpen);
          }}
        >
          <SettingsIcon />
        </i>
        <i
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <CloseIcon />
        </i>
      </div>
    </S.UserNameWrapper>
  );
};

export default UserNameContainer;

import { CloseIcon, SettingsIcon } from 'components/Icons';
import { useNavigate } from 'react-router-dom';
import { MenuOpenProps } from '..';
import * as S from './style';

const UserNameContainer = ({ isOpen, setIsOpen }: MenuOpenProps) => {
  const navigate = useNavigate();
  return (
    <S.UserNameWrapper>
      <div className="user-name">
        <span>아즈마 미유키{/* {user.name} */}</span>님
      </div>
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

//STYLED
import * as S from './style';

//STORE
import { useAppDispatch } from 'store/hooks/index';
import { deleteToBase64Img, Ibase64 } from 'store/slices/reviewSlice';

interface Props {
  item: Ibase64;
}

const UploadedImg = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <S.StyledUploadedImg
      onClick={() => {
        console.log(item.id);
        dispatch(deleteToBase64Img(item));
      }}
    >
      <img src={item?.img && item.img} alt="업로드된 이미지" className="uploaded-img" />
    </S.StyledUploadedImg>
  );
};

export default UploadedImg;

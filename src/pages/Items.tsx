import React from 'react';
import LargeCategoryModal from 'components/item/LargeCategoryModal';
import { useItemSlice } from '../store/hooks';

const Items = () => {
  const { isShowLargeCategoryModal } = useItemSlice();

  return <>{isShowLargeCategoryModal && <LargeCategoryModal />}</>;
};

export default Items;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { headerBarHandler } from 'store/slices/itemSlice';
import { useAppDispatch } from 'store/hooks/index';
const ItemDetail = () => {
  const { state, pathname } = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(headerBarHandler());

    return () => {
      dispatch(headerBarHandler());
    };
  }, []);
  return <>{state.id}</>;
};

export default ItemDetail;

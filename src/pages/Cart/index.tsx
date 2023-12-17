import React, { useEffect, useState } from 'react';
//Api
import { getUser, getCart } from 'utils/Api/cartApi';
//hooks
import { useAppDispatch, useCartSlice } from 'store/hooks/index';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

const Cart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getCart());
  }, []);

  return <div></div>;
};

export default SetHeaderBar(Cart);

import React, { useEffect, useState } from 'react';
//Api
import { getUser } from 'utils/Api/cartApi';
//hooks
import { useAppDispatch, useCartSlice } from 'store/hooks/index';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { userData } = useCartSlice();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return <div></div>;
};

export default Cart;

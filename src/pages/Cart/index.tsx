import React, { useEffect, useState } from 'react';
//Api
import { getUser } from 'utils/Api/cartApi';
//hooks
import { useAppDispatch, useCartSlice } from 'store/hooks/index';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

const Cart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return <div></div>;
};

export default SetHeaderBar(Cart);

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAppDispatch } from 'store/hooks';
import { useItemSlice } from 'store/hooks';
// const dispatch = useAppDispatch();

const api = axios.create({
  baseURL: 'http://onulstore.dlcpop.com/',
  headers: {
    'content-type': 'application/json',
  },
});

api.interceptors.response.use(
  (config) => {
    console.log(config);

    return config;
  },
  (err) => {
    alert('해당 페이지에 문제가 있습니다! Q&N에 문의 해 주세요!');
    return Promise.reject(err);
  },
);

export default api;

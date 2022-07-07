import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const fetchCart = () => {
  return axios.get(`/api/cart/`);
};

export const addToCart = (petId) => {
  return axios.post('/api/cart', petId);
};

export const removeFromCart = (petId) => {
  return axios.delete(`/api/cart/${petId}`);
};

export const createCart = createAction('createCart');

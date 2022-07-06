import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const fetchCarts = () => {
  return axios.get('/api/carts');
};

export const fetchCart = (cartId) => {
  return axios.get(`/api/carts/${cartId}`);
};

export const addToCart = (petId) => {
  return axios.post('/api/carts', petId);
};

export const removeFromCart = (petId) => {
  return axios.delete(`/api/carts/${petId}`);
};

export const createCart = createAction('createCart');

import axios from 'axios';

export const fetchCarts = () => {
    return axios.get('/api/carts');
}

export const fetchCart = (cartId) => {
    return axios.get(`/api/carts/${cartId}`);
}

export const addToCart = (petId) => {
    return axios.post('/api/carts', petId);
}
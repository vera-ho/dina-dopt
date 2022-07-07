import axios from 'axios';

export const fetchCart = () => {
  return axios.get(`/api/cart/`);
};

export const addToCart = (petId) => {
  return axios({
    url: "/api/cart",
    method: 'POST',
    data: {
      petId: petId
    }
  })
};

export const removeFromCart = (petId) => {
  return axios({
    url: "/api/cart",
    method: 'DELETE',
    data: {
      petId: petId
    }
  })
};

import axios from 'axios';

export const fetchCart = () => {
  return axios.get(`/api/cart/`);
};

export const addToCart = (pet) => {
  return axios({
    url: "/api/cart",
    method: 'PATCH',
    data: {
      pet: pet
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

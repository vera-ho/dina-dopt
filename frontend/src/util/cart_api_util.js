import axios from 'axios';

export const fetchCart = () => {
  return axios.get(`/api/cart/`);
};

export const addToCart = (petId) => {
  return axios({
    url: "/api/cart",
    method: 'PATCH',
    data: {
      petId: petId
    }
  })
};

export const removeOneFromCart = (petId) => {
  return axios({
    url: "/api/cart/remove_one",
    method: 'PATCH',
    data: {
      petId: petId
    }
  })
};

export const removeAllFromCart = (petId) => {
  return axios({
    url: "/api/cart/remove_all",
    method: 'PATCH',
    data: {
      petId: petId
    }
  })
}

export const clearCart = () => {
  return axios({
    url: "/api/cart/clear",
    method: 'DELETE',
  })
}

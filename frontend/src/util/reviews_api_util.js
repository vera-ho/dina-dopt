import axios from 'axios';

export const createReview = (petId,reviewData) => {
    return axios.post(`/api/pets/${petId}`, reviewData);
};
  
export const getAllReviewsForPet = (petId) => {
    return axios.get(`/api/pets${petId}`);
};
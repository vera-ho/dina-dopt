import axios from 'axios';

export const createReview = (petId,reviewData) => {
    return axios.post(`/api/reviews/pet/${petId}`, reviewData);
};
  
export const fetchAllReviewsForPet = (petId) => {
    return axios.get(`/api/reviews/pet/${petId}`);
};
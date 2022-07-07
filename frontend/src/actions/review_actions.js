import * as ReviewUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS_FOR_PET = "RECEIVE_ALL_REVIEWS_FOR_PET";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";


export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveAllReviewsForPet = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS_FOR_PET,
    reviews
});

export const receiveReviewUser = (reviewUser) => ({
    type: RECEIVE_ALL_REVIEWS_FOR_PET,
    reviewUser
});
  
export const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});


export const createReview = (petId,review) => dispatch => (
    ReviewUtil.createReview(petId, review)
        .then((review) => (dispatch(receiveReview(review))), 
        err => (dispatch(receiveErrors(err.response.data))))
);

export const fetchAllReviewsForPet = (petId) => dispatch => (
    ReviewUtil.fetchAllReviewsForPet(petId)
        .then((reviews) => (dispatch(receiveAllReviewsForPet(reviews))), 
        err => (dispatch(receiveErrors(err.response.data))))
);

export const fetchAllReviews = () => dispatch => (
    ReviewUtil.fetchAllReviews()
        .then((reviews) => (dispatch(receiveAllReviewsForPet(reviews))), 
        err => (dispatch(receiveErrors(err.response.data))))
);

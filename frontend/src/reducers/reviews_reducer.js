import { RECEIVE_REVIEW, 
  RECEIVE_ALL_REVIEWS_FOR_PET,
  REMOVE_REVIEW} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_REVIEWS_FOR_PET:
      Object.assign(nextState, action.reviews.data);
      return nextState;
    case RECEIVE_REVIEW:
      nextState[action.review.id] = action.review.data
      return nextState;
    case REMOVE_REVIEW:
      delete nextState[action.reviewId];
      return nextState;
    default:
      return state;
  }
}
  
export default reviewsReducer;
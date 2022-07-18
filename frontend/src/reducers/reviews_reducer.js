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
      let length = Object.values(nextState).length;
      nextState[length] = action.review.data;
      return nextState;

    case REMOVE_REVIEW:
      let reviews = Object.values(nextState);
      reviews.forEach( (review, idx) => {
        if(action.reviewId === review._id) {
          delete nextState[idx];
        }
      })
      return nextState;
      
    default:
      return state;
  }
}
  
export default reviewsReducer;
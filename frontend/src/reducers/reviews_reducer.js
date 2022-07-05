import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS_FOR_PET} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
  case RECEIVE_ALL_REVIEWS_FOR_PET:
    return Object.assign( {}, action.reviews, state);
    case RECEIVE_REVIEW:
    //   const newReview = { [action.review.id]: action.review };
    //   return newReview;
      nextState[action.review.id] = action.review
      return nextState
  default:
    return state;
  }
}
  
export default reviewsReducer;
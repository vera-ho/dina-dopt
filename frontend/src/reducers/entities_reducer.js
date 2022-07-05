import { combineReducers } from 'redux';
import reviewsReducer from './reviews_reducer';


export default combineReducers({
  reviews: reviewsReducer
});

import { combineReducers } from 'redux';
import reviewsReducer from './reviews_reducer';
import petsReducer from './pets_reducer';


export default combineReducers({
  pets: petsReducer,
  reviews: reviewsReducer
});

import { combineReducers } from 'redux';
import reviewsReducer from './reviews_reducer';
import petsReducer from './pets_reducer';
import cartReducer from './cart_reducer';

export default combineReducers({
  pets: petsReducer,
  cart: cartReducer,
  reviews: reviewsReducer
});

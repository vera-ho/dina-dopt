import { combineReducers } from 'redux';
import reviewsReducer from './reviews_reducer';
import petsReducer from './pets_reducer';
import usersReducer from './users_reducer';
import cartReducer from './cart_reducer';

export default combineReducers({
  pets: petsReducer,
  reviews: reviewsReducer,
  cart: cartReducer,
  users: usersReducer
});
import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
// import sessionAPI from './session_api_reducer';
import petsReducer from './pets_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  // sessionAPI, 
  pets: petsReducer
});

export default RootReducer;
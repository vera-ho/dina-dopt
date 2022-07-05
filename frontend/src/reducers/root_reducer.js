import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors/errors_reducer';
import sessionAPI from './session_api_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  sessionAPI
});

export default RootReducer;
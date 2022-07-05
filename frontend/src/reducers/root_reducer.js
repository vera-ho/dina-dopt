import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors/errors_reducer';
import sessionAPI from './session_api_reducer';
import entities from './entities_reducer'

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  sessionAPI
});

export default RootReducer;
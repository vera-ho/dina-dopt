import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import petsReducer from './pets_reducer';
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  pets: petsReducer,
  ui: uiReducer
});

export default RootReducer;
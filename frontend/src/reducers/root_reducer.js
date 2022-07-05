import { combineReducers } from 'redux';
import session from './session_reducer';
import petsReducer from './pets_reducer';
import errors from './errors/errors_reducer';
import uiReducer from './ui_reducer';
import entities from './entities_reducer'

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  pets: petsReducer,
  ui: uiReducer
});

export default RootReducer;
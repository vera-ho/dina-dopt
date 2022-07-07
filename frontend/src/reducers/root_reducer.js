import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors/errors_reducer';
import uiReducer from './ui_reducer';
import entities from './entities_reducer'

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  ui: uiReducer
});

export default RootReducer;
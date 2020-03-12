import { combineReducers } from 'redux';
import AuthReducer from './Auth/Auth.reducer';

export default combineReducers({
  auth: AuthReducer
});

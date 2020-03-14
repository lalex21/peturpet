import { combineReducers } from 'redux';
import AuthReducer from './Auth/Auth.reducer';
import ApplicationReducer from './Application/Application.reducer';

export default combineReducers({
  auth: AuthReducer,
  application: ApplicationReducer
});

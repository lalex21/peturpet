import { AUTH_LOGIN, AUTH_LOGOUT } from '../../constants/Auth/Auth.types';
import { APPLICATION_IS_NOT_LOADING } from '../../constants/Application/Application.types';

export const login = () => dispatch =>
  dispatch({ type: AUTH_LOGIN, payload: {} });

export const logout = () => dispatch => {
  dispatch({ type: AUTH_LOGOUT, payload: {} });
  dispatch({ type: APPLICATION_IS_NOT_LOADING, payload: {} });
};

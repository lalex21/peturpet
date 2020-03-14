import { AUTH_LOGIN, AUTH_LOGOUT } from '../../constants/Auth/Auth.types';

export const login = () => dispatch =>
  dispatch({ type: AUTH_LOGIN, payload: {} });

export const logout = () => dispatch =>
  dispatch({ type: AUTH_LOGOUT, payload: {} });

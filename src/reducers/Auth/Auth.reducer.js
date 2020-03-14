import { AUTH_LOGIN, AUTH_LOGOUT } from '../../constants/Auth/Auth.types';

const initialState = {
  isLogin: false,
  token: null
};

const AuthReducer = (state = initialState, { type, payload } = {}) => {
  if (type === AUTH_LOGIN) return { ...state, isLogin: true, ...payload };
  if (type === AUTH_LOGOUT) return { ...state, isLogin: false, ...payload };
  return state;
};

export default AuthReducer;

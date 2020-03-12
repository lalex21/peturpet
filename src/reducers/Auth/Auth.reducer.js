import { AUTH_UPDATE_TOKEN } from '../../constants/Auth/Auth.types';

const initialState = {
  isLogin: false,
  token: null
};

const AuthReducer = (state = initialState, { type, payload } = {}) => {
  if (type === AUTH_UPDATE_TOKEN)
    return { ...state, isLogin: true, ...payload };
  return state;
};

export default AuthReducer;

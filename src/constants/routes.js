import React from 'react';

import { pathRootAplication } from '../environment/environment';
import LoginContainer from '../containers/Login/Login.container';
import SignInContainer from '../containers/SignIn/SignIn.container';
import ForgotPasswordContainer from '../containers/ForgetPassword/ForgetPassword.container';

const NotFound = () => <div>NotFound</div>;
const Building = () => <div>Building</div>;

const pathRoot = pathRootAplication;

export const RoutesNoAuth = {
  Login: {
    path: `${pathRoot}/login`,
    component: LoginContainer
  },
  SignIn: {
    path: `${pathRoot}/sign-in`,
    component: SignInContainer
  },
  ForgetPassword: {
    path: `${pathRoot}/forgot-password`,
    component: ForgotPasswordContainer
  },
  LoginPath: {
    path: '/',
    redirect: 'Login'
  },
  LoginPathRoot: {
    path: pathRoot,
    redirect: 'Login'
  },
  NotFound: {
    component: NotFound,
    exact: false
  }
};

export default {
  Home: {
    component: Building,
    exact: true
  },
  HomePathRoot: {
    path: pathRoot,
    redirect: 'Home'
  },
  NotFound: {
    component: NotFound,
    exact: false
  }
};

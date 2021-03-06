import React from 'react';

import { pathRootAplication } from '../environment/environment';
import LoginContainer from '../containers/Login/Login.container';
import SignInContainer from '../containers/SignIn/SignIn.container';
import ForgotPasswordContainer from '../containers/ForgetPassword/ForgetPassword.container';
import RecoverPasswordContainer from '../containers/RecoverPassword/RecoverPassword.container';
import BuildingContainer from '../containers/Building/Building.container';
import ComponentsTest from '../containers/ComponentsTest/ComponentsTest';

const NotFound = () => <div>NotFound</div>;

const pathRoot = pathRootAplication;

export const RoutesNoAuth = {
  ComponentsTestRoot: {
    path: `${pathRoot}/test`,
    component: ComponentsTest
  },
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
  RecoverPassword: {
    path: `${pathRoot}/recover-password`,
    component: RecoverPasswordContainer
  },
  Building: {
    path: `${pathRoot}/building`,
    component: BuildingContainer
  },
  LoginPath: {
    path: '/',
    redirect: 'SignIn'
  },
  LoginPathRoot: {
    path: pathRoot,
    redirect: 'SignIn'
  },
  NotFound: {
    component: NotFound,
    exact: false
  }
};

export default {
  Home: {
    component: BuildingContainer,
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

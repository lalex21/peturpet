import React from 'react';

import LoginContainer from '../containers/Login/Login.container';

const NotFound = () => <div>NotFound</div>;

const pathRoot = `/peturpet`;

export const RoutesNoAuth = {
  Login: {
    component: LoginContainer,
    exact: false
  }
};

export default {
  Home: {
    component: NotFound,
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

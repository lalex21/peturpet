import React from 'react';
import RouteAnimate from '../../animations/Route/Route.animation';
// import PropTypes from '../../utils/PropTypes';

import LinkComponent from '../../components/Link/Link.component';

const LoginContainer = ({ routes }) => {
  const show = false;
  console.log(show, routes);
  return (
    <RouteAnimate>
      <div>Login</div>
      <LinkComponent to={routes.ForgetPassword.path}>
        go ForgetPassword
      </LinkComponent>
      <LinkComponent to={routes.SignIn.path}>go Registro</LinkComponent>
    </RouteAnimate>
  );
};

export default LoginContainer;
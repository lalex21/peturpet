import React from 'react';
import RouteAnimate from '../../animations/Route/Route.animation';
// import PropTypes from '../../utils/PropTypes';

import LinkComponent from '../../components/Link/Link.component';

const SignInContainer = ({ routes }) => {
  const show = false;
  console.log(show, routes);
  return (
    <RouteAnimate>
      <div>SignIn</div>
      <LinkComponent to={routes.Login.path}>go Login</LinkComponent>
    </RouteAnimate>
  );
};

export default SignInContainer;

import React from 'react';
import RouteAnimate from '../../animations/Route/Route.animation';
// import PropTypes from '../../utils/PropTypes';

import LinkComponent from '../../components/Link/Link.component';

const ForgotPasswordContainer = ({ routes }) => {
  const show = false;
  console.log(show, routes);
  return (
    <RouteAnimate>
      <div>ForgotPassword</div>
      <LinkComponent to={routes.Login.path}>go Login</LinkComponent>
    </RouteAnimate>
  );
};

export default ForgotPasswordContainer;

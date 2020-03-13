import React from 'react';
import RouteAnimate from '../../animations/Route/Route.animation';

import LinkComponent from '../../components/Link/Link.component';

const RecoverPasswordContainer = ({ routes }) => {
  const show = false;
  console.log(show, routes);
  return (
    <RouteAnimate>
      <div>RecoverPassword</div>
      <img></img>
      <LinkComponent to={routes.Login.path}>go Login</LinkComponent>
    </RouteAnimate>
  );
};

export default RecoverPasswordContainer;

import React from 'react';
import RouteAnimate from '../../animations/Route/Route.animation';
import LayoutTemplate from '../../templates/Layout/Layout.template';

import DogAnimation from '../../animations/Dog/Dog.animation';

import LinkComponent from '../../components/Link/Link.component';

import './RecoverPassword.stylesheet.scss';

const RecoverPasswordContainer = ({ routes }) => {
  const show = false;
  console.log(show, routes);
  return (
    <RouteAnimate>
      <LayoutTemplate className="recoverpassword_container" full center>
        <DogAnimation />
        <h1 className="recoverpassword_container--title bold">
          ¡Hey, te mandé un mensajito!
        </h1>
        <p className="recoverpassword_container--description">
          Revisa tu celular e ingresa el código que te mandé para recuperar tu
          contraseña.
        </p>
        <LinkComponent to={routes.Login.path}>go Login</LinkComponent>
      </LayoutTemplate>
    </RouteAnimate>
  );
};

export default RecoverPasswordContainer;

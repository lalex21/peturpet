import React from 'react';
import RouteAnimate from '../../animations/Route/Route.animation';

import Button from '../../components/Button/Button.component';
import LinkComponent from '../../components/Link/Link.component';
import RadioButton from '../../components/RadioButton/RadioButton.component';

const ForgotPasswordContainer = ({ routes }) => {
  const show = false;
  console.log(show, routes);
  return (
    <RouteAnimate>
      <div>¿No recuerdas tu contraseña? ¡Aquí te ayudamos!</div>
      <div>¿Por qué medio deseas recuperarla?</div>
      <RadioButton
        name="recover_options"
        options={['Mi celular', 'Mi correo']}
      />
      <Button text="Recuperar" className="secondary" icon="paw" />
      <LinkComponent to={routes.Login.path}>go Login</LinkComponent>
    </RouteAnimate>
  );
};

export default ForgotPasswordContainer;

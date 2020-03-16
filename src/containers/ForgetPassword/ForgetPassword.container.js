import React from 'react';
import LayoutTemplate from '../../templates/Layout/Layout.template';

import Button from '../../components/Button/Button.component';
import LinkComponent from '../../components/Link/Link.component';
import Input from '../../components/Input/Input.component';
import RadioButton from '../../components/RadioButton/RadioButton.component';

import Leaf1 from '../../animations/frames/Leaf1/Leaf1.frame';
import Leaf2 from '../../animations/frames/Leaf2/Leaf2.frame';

import './ForgetPassword.stylesheet.scss';

const ForgotPasswordContainer = ({ routes }) => {
  const show = false;
  console.log(show, routes);

  return (
    <LayoutTemplate className="forgetpassword_container" full center>
      <h1 className="forgetpassword_container--title bold">
        ¿Olvidaste tu contraseña?
      </h1>
      <p className="forgetpassword_container--description">
        Indica el medio para recuperarla
      </p>
      <RadioButton
        name="recover_options"
        options={['Mi celular', 'Mi correo']}
      />
      <Input placeholder="Mi celular" />
      <Button className="secondary" icon="paw">
        Recuperar
      </Button>
      <LinkComponent to={routes.Login.path}>Vuelve al inicio</LinkComponent>
      <div className="leafs_parent">
        <div className="leafs_parent--relative">
          <div className="leafs_parent--relative-leaf1">
            <Leaf1 color="#BFC6FF" />
          </div>
          <div className="leafs_parent--relative-leaf2">
            <Leaf2 color="#F5DAAD" />
          </div>
          <div className="leafs_parent--relative-leaf3">
            <Leaf1 color="#FEC9BE" />
          </div>
        </div>
      </div>
    </LayoutTemplate>
  );
};

export default ForgotPasswordContainer;

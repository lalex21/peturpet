import React from 'react';
import RouteAnimate from '../../animations/Route/Route.animation';
import StepWelcomeAnimation from '../../animations/SignIn/StepWelcome/StepWelcome.animation';

import LayoutTemplate from '../../templates/Layout/Layout.template';

import { Row, Col } from '../../components/Grid/Grid.component';
import Input from '../../components/Input/Input.component';
import LinkComponent from '../../components/Link/Link.component';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import Button from '../../components/Button/Button.component';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin.component';
import FacebookLogin from '../../components/FacebookLogin/FacebookLogin.component';

import './Login.stylesheet.scss';

const LoginContainer = ({ routes }) => {
  const show = false;
  console.log(show, routes);
  return (
    <RouteAnimate>
      <LayoutTemplate className="login_container" full paw>
        <Row>
          <Col sm={12} className="login_container--step-col">
            <StepWelcomeAnimation />
          </Col>
          <Col sm={12} className="login_container--email-col">
            <Input placeholder="Tu correo" />
          </Col>
          <Col sm={12} className="login_container--password-col">
            <Input placeholder="Tu contraseña" />
          </Col>
          <Col sm={12} className="login_container--remember-col">
            <Checkbox name="Recordarme" />
            <LinkComponent to="/forgot-password">
              ¿Olvidaste tu contraseña?
            </LinkComponent>
          </Col>
          <Col sm={12} className="login_container--continue-col">
            <Button className="secondary">Vamos</Button>
          </Col>
          <Col sm={12} className="login_container--alternative-col">
            <span>O inicia sesión con</span>
            <GoogleLogin />
            <FacebookLogin />
          </Col>
          <Col sm={12}>
            <span>¿No tienes cuenta? </span>
            <LinkComponent to="/sign-in">Regístrate</LinkComponent>
          </Col>
        </Row>
      </LayoutTemplate>
    </RouteAnimate>
  );
};

export default LoginContainer;

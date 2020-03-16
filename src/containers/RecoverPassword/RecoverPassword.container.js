import React from 'react';
import { Breakpoint } from 'react-socks';

import RouteAnimate from '../../animations/Route/Route.animation';
import LayoutTemplate from '../../templates/Layout/Layout.template';

import DogAnimation from '../../animations/Dog/Dog.animation';

import LinkComponent from '../../components/Link/Link.component';
import EmojiIconGenerator from '../../components/EmojiIconGenerator/EmijoIconGenerator.component';
import { Row, Col } from '../../components/Grid/Grid.component';

import './RecoverPassword.stylesheet.scss';

const RecoverPasswordContainer = ({ routes }) => {
  const show = false;
  console.log(show, routes);
  return (
    <RouteAnimate>
      <LayoutTemplate className="recoverpassword_container" full center paw>
        <Row>
          <Col>
            <Breakpoint lg up>
              <DogAnimation />
            </Breakpoint>
          </Col>
          <Col sm={12}>
            <Breakpoint md down>
              <DogAnimation />
            </Breakpoint>
            <h1 className="recoverpassword_container--title bold">
              ¡Hey, te mandé un mensajito!
            </h1>
            <p className="recoverpassword_container--description">
              Revisa tu celular e ingresa el código que te mandé para recuperar
              tu contraseña.
            </p>
            <EmojiIconGenerator n={4} />
            <LinkComponent to={routes.Login.path}>Cancelar</LinkComponent>
          </Col>
          <Col lg={4}>
            <Breakpoint lg up>
              Hola
            </Breakpoint>
          </Col>
        </Row>
      </LayoutTemplate>
    </RouteAnimate>
  );
};

export default RecoverPasswordContainer;

import React from 'react';
import { Breakpoint } from 'react-socks';
import RouteAnimate from '../../animations/Route/Route.animation';
// import StepWelcomeAnimation from '../../animations/SignIn/StepWelcome/StepWelcome.animation';
import StepFinishAnimation from '../../animations/SignIn/StepFinish/StepFinish.animation';
import LayoutTemplate from '../../templates/Layout/Layout.template';

import Dots from '../../animations/frames/Dots/Dots.framer';

import { Row, Col } from '../../components/Grid/Grid.component';
import Input from '../../components/Input/Input.component';
import LinkComponent from '../../components/Link/Link.component';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import Button from '../../components/Button/Button.component';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin.component';
import FacebookLogin from '../../components/FacebookLogin/FacebookLogin.component';
import { ReactComponent as LogoPetUrPet } from '../../assets/images/LOGO.svg';

import './Login.stylesheet.scss';

const LoginContainer = ({ routes }) => {
  console.log(routes);
  //   <RouteAnimate>
  // <LayoutTemplate className="login_container" full paw>
  //   <Row>
  //     <Col sm={12} className="login_container--step-col">
  //       <StepWelcomeAnimation />
  //     </Col>
  //     <Col sm={12} className="login_container--email-col">
  //       <Input placeholder="Tu correo" />
  //     </Col>
  //     <Col sm={12} className="login_container--password-col">
  //       <Input placeholder="Tu contraseña" />
  //     </Col>
  //     <Col sm={12} className="login_container--remember-col">
  //       <Checkbox name="Recordarme" />
  //       <LinkComponent to={routes.ForgetPassword.path}>
  //         ¿Olvidates tu contraseña?
  //       </LinkComponent>
  //     </Col>
  //     <Col sm={12} className="login_container--continue-col">
  //       <Button className="secondary">Vamos</Button>
  //     </Col>
  //     <Col sm={12} className="login_container--alternative-col">
  //       <span>O inicia sesión con</span>
  // <GoogleLogin />
  // <FacebookLogin />
  //     </Col>
  //     <Col sm={12}>
  //       <span>¿No tienes cuenta? </span>
  //       <LinkComponent to={routes.SignIn.path}>Regístrate</LinkComponent>
  //     </Col>
  //   </Row>
  // </LayoutTemplate>
  // </RouteAnimate>
  // eslint-disable-next-line no-unused-vars
  const RenderBanner = () => (
    <div
      className="login_container--bubble"
      style={{
        backgroundColor: '#BFC6FF'
      }}
    >
      <div className="login_container--bubble-logo">
        <LogoPetUrPet />
      </div>
      <div className="login_container--bubble-content">
        <StepFinishAnimation />
      </div>
      <div className="login_container--bubble-dots login_container--bubble-dots-left">
        <Dots animation={{ variants: {} }} />
      </div>
      <div className="login_container--bubble-dots login_container--bubble-dots-right">
        <Dots animation={{ variants: {} }} />
      </div>
    </div>
  );

  return (
    <RouteAnimate>
      <LayoutTemplate
        className="login_container"
        paw
        fluid
        childrenNoContainer={<RenderBanner />}
      >
        <Row>
          <Col sm={12}>
            <form className="login_container--form">
              <Row>
                <Col sm={12}>
                  <Breakpoint md up>
                    <h1>Inicia sesión</h1>
                  </Breakpoint>
                </Col>
                <Col sm={12} className="login_container--form-input">
                  <Input placeholder="Tu correo" />
                </Col>
                <Col sm={12} className="login_container--form-input">
                  <Input placeholder="Tu contraseña" />
                </Col>
                <Col sm={12}>
                  <div className="login_container--form-info">
                    <div className="login_container--form-info-checkbox">
                      <Checkbox name="Recordarme" />
                    </div>
                    <div className="login_container--form-info-link">
                      <LinkComponent to="/recover-password">
                        ¿Olvidaste tu contraseña?
                      </LinkComponent>
                    </div>
                  </div>
                </Col>
                <Col sm={12}>
                  <Button
                    className="login_container--form-button"
                    typeButton="primary"
                    paw
                    large
                  >
                    Vamos
                  </Button>
                </Col>
                <Col sm={12}>
                  <div className="login_container--form-alternatives">
                    <p>O inicia sesión con</p>
                    <GoogleLogin />
                    <FacebookLogin />
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="login_container--form-signin">
                    <LinkComponent to="/building">
                      <p>
                        ¿Aún no tienes una cuenta?&nbsp;
                        <span>Regístrate</span>
                      </p>
                    </LinkComponent>
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </LayoutTemplate>
    </RouteAnimate>
  );
};

export default LoginContainer;

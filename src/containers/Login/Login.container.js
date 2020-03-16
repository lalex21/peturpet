import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import { motion } from 'framer-motion';
import RouteAnimate from '../../animations/Route/Route.animation';
// import StepWelcomeAnimation from '../../animations/SignIn/StepWelcome/StepWelcome.animation';
import StepFinishAnimation from '../../animations/SignIn/StepFinish/StepFinish.animation';
import LayoutTemplate from '../../templates/Layout/Layout.template';

// import Dots from '../../animations/frames/Dots/Dots.framer';

import { Row, Col } from '../../components/Grid/Grid.component';
import Input from '../../components/Input/Input.component';
import LinkComponent from '../../components/Link/Link.component';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import Button from '../../components/Button/Button.component';
// import GoogleLogin from '../../components/GoogleLogin/GoogleLogin.component';
// import FacebookLogin from '../../components/FacebookLogin/FacebookLogin.component';
import { ReactComponent as LogoPetUrPet } from '../../assets/images/LOGO.svg';

import './Login.stylesheet.scss';

const LoginContainer = ({ routes }) => {
  console.log(routes);
  const [checked, setChecked] = useState(false);
  const RenderBanner = () => (
    <motion.div
      initial={{
        opacity: 0,
        y: 200,
        scale: 0,
        borderRadius: ['30%', '50%', '100%']
      }}
      animate={{
        ease: 'easeInOut',
        opacity: 1,
        scale: 1,
        y: 0,
        borderRadius: ['0', '0', '40px', '40px']
      }}
      transition={{
        duration: 0.25
      }}
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
    </motion.div>
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
            <motion.form
              initial={{
                opacity: 0,
                y: 100
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5
              }}
              className="login_container--form"
            >
              <Row>
                <Col sm={12}>
                  <Breakpoint md up>
                    <h1>Inicia sesión</h1>
                  </Breakpoint>
                </Col>
                <Col sm={12} className="login_container--form-input">
                  <Input
                    type="email"
                    placeholder="Tu correo"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
                </Col>
                <Col sm={12} className="login_container--form-input">
                  <Input type="password" placeholder="Tu contraseña" />
                </Col>
                <Col sm={12}>
                  <div className="login_container--form-info">
                    <div className="login_container--form-info-checkbox">
                      <Checkbox
                        label="Recordarme"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
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
                {/* <Col sm={12}>
                  <div className="login_container--form-alternatives">
                    <p>O inicia sesión con</p>
                    <GoogleLogin />
                    <FacebookLogin />
                  </div>
                </Col> */}
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
            </motion.form>
          </Col>
        </Row>
      </LayoutTemplate>
    </RouteAnimate>
  );
};

export default LoginContainer;

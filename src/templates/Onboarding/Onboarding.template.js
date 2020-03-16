import React from 'react';
import { motion } from 'framer-motion';
import { Breakpoint } from 'react-socks';
import PropTypes from '../../utils/PropTypes';
import { Row, Col, Container } from '../../components/Grid/Grid.component';

import Layout from '../Layout/Layout.template';
import DotStep from '../../components/DotStep/DotStep.component';
import LinkComponent from '../../components/Link/Link.component';
import Button from '../../components/Button/Button.component';

import { ReactComponent as LogoPetUrPet } from '../../assets/images/LOGO.svg';

import './Onboarding.stylesheet.scss';

const container = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
      // delay: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'backOut'
    }
  }
};

const Onboardingtemplate = ({
  children,
  description,
  backgroundColor,
  step,
  prevStep,
  dots,
  toStep,
  toNextStep,
  toPrevStep
}) => {
  const RenderChildren = ({ col, breakpoints }) => (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Col {...col}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Breakpoint {...breakpoints}>
        <div className="onboarding_template--content">
          <motion.div variants={item}>{children}</motion.div>
        </div>
      </Breakpoint>
    </Col>
  );

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Layout
        paw
        full
        center
        className="onboarding_template"
        style={{ backgroundColor }}
      >
        <Row>
          <RenderChildren
            col={{ md: 6 }}
            breakpoints={{ md: true, up: true }}
          />
          <Col sm={12} md={6} xl={{ offset: 1, span: 4 }}>
            <Container fluid className="onboarding_template_container">
              <Row>
                <Col sm={12} className="onboarding_template_container--logo">
                  <LogoPetUrPet />
                </Col>
                <RenderChildren breakpoints={{ sm: true, down: true }} />
                <Col
                  sm={12}
                  className="onboarding_template_container--description"
                >
                  <p>{description}</p>
                </Col>
                <Col
                  sm={12}
                  className="onboarding_template_container--dots_step"
                >
                  <DotStep
                    step={step}
                    prevStep={prevStep}
                    dots={dots}
                    toStep={toStep}
                    toPrevStep={toPrevStep}
                    toNextStep={toNextStep}
                  />
                </Col>
                <Col
                  md={12}
                  className="onboarding_template_container--continue"
                >
                  {step === dots - 1 ? (
                    <LinkComponent to="/login">
                      <Button typeButton="secondary" size="large">
                        Inicia sesión
                      </Button>
                    </LinkComponent>
                  ) : (
                    <Button
                      typeButton="secondary"
                      size="large"
                      onClick={toNextStep}
                    >
                      Continúa
                    </Button>
                  )}
                </Col>
                <Col sm={12} className="onboarding_template_container--login">
                  <LinkComponent to="/login">
                    <p>
                      ¿Aún no tienes una cuenta?&nbsp;
                      <span>Regístrate</span>
                    </p>
                  </LinkComponent>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Layout>
    </motion.div>
  );
};

Onboardingtemplate.defaultProps = {
  description: '',
  backgroundColor: '#5A48A3'
};

Onboardingtemplate.propTypes = {
  children: PropTypes.children.isRequired,
  description: PropTypes.string,
  backgroundColor: PropTypes.string,
  step: PropTypes.number.isRequired,
  prevStep: PropTypes.number.isRequired,
  dots: PropTypes.number.isRequired,
  toStep: PropTypes.func.isRequired,
  toNextStep: PropTypes.func.isRequired,
  toPrevStep: PropTypes.func.isRequired
};

export default Onboardingtemplate;

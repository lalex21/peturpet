import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from '../../utils/PropTypes';
import { Row, Col } from '../../components/Grid/Grid.component';

import Layout from '../Layout/Layout.template';
import DotStep from '../../components/DotStep/DotStep.component';
import LinkComponent from '../../components/Link/Link.component';
import Button from '../../components/Button/Button.component';

import { ReactComponent as LogoPetUrPet } from '../../assets/images/LOGO.svg';

import './Onboarding.stylesheet.scss';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // delay: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // delay: 0.7
    }
  }
};

const Onboardingtemplate = ({
  children,
  description,
  backgroundColor,
  step,
  dots,
  toStep,
  toNextStep,
  toPrevStep
}) => {
  console.log('Onboardingtemplate', step);
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Layout
        full
        center
        className="onboarding_template"
        style={{ backgroundColor }}
      >
        <motion.div variants={item}>
          <Row>
            <Col className="onboarding_template--logo">
              <LogoPetUrPet />
            </Col>
            <Col sm={12} className="onboarding_template--content">
              {children}
            </Col>
            <Col sm={12} className="onboarding_template--dots_step">
              <DotStep
                step={step}
                dots={dots}
                toStep={toStep}
                toPrevStep={toPrevStep}
                toNextStep={toNextStep}
              />
            </Col>
            <Col sm={12} className="onboarding_template--description">
              <p>{description}</p>
            </Col>
            <Col sm={12} className="onboarding_template--continue">
              <Button className="primary" onClick={toNextStep}>
                Continúa
              </Button>
            </Col>
            <Col sm={12} className="onboarding_template--login">
              <LinkComponent>
                <p>
                  ¿Ya tienes una cuenta?&nbsp;
                  <span>Iniciar sesión</span>
                </p>
              </LinkComponent>
            </Col>
          </Row>
        </motion.div>
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
  dots: PropTypes.number.isRequired,
  toStep: PropTypes.func.isRequired,
  toNextStep: PropTypes.func.isRequired,
  toPrevStep: PropTypes.func.isRequired
};

export default Onboardingtemplate;

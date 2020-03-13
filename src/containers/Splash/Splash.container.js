import React from 'react';
import { motion } from 'framer-motion';

import { Row, Col } from '../../components/Grid/Grid.component';
import RouteAnimate from '../../animations/Route/Route.animation';
import LayoutTemplate from '../../templates/Layout/Layout.template';

import { ReactComponent as LogoPetUrPet } from '../../assets/images/LOGO.svg';

import './Splash.stylesheet.scss';

const container = {
  hidden: { opacity: 0, scale: 0.85, y: -80 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7
    }
  }
};

const SplashContainer = () => {
  return (
    <RouteAnimate>
      <LayoutTemplate full center className="splash_container">
        <Row>
          <Col sm="12" className="splash_container--logo">
            <motion.div variants={container} initial="hidden" animate="visible">
              <LogoPetUrPet />
            </motion.div>
          </Col>
          <Col sm="12" className="splash_container--footer">
            <motion.p variants={item} initial="hidden" animate="visible">
              Made with&nbsp;
              <span style={{ color: '#e25555' }}>&#9829;</span>
              &nbsp;for PragmaNoobs
            </motion.p>
          </Col>
        </Row>
      </LayoutTemplate>
    </RouteAnimate>
  );
};

export default SplashContainer;

import React from 'react';
import { motion } from 'framer-motion';
import Paw from '../frames/Paw/Paw.frame';
// import PropTypes from '../../utils/PropTypes';

const container = {
  hidden: {
    opacity: 0
  },
  showOnly: {
    opacity: 1
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

const paw1 = {
  hidden: {
    opacity: 0,
    x: 30,
    y: 0
  },
  showOnly: {
    opacity: 1
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const paw2 = {
  hidden: {
    opacity: 0,
    x: 8,
    y: 13
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      yoyo: 1
    }
  }
};

const paw3 = {
  hidden: {
    opacity: 0,
    x: 14,
    y: -18
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      yoyo: 1
    }
  }
};

// eslint-disable-next-line no-unused-vars
const ButtonAnimation = () => {
  return (
    <motion.svg
      variants={container}
      width="50.836"
      height="19.798"
      viewBox="0 0 50.836 19.798"
    >
      <Paw animation={{ variants: paw2 }} />
      <Paw animation={{ variants: paw1 }} />
      <Paw animation={{ variants: paw3 }} />
    </motion.svg>
  );
};

ButtonAnimation.propTypes = {};

ButtonAnimation.defaultProps = {};

export default ButtonAnimation;

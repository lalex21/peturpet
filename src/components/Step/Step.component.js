import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import PropTypes from '../../utils/PropTypes';

const Step = ({
  children,
  toNextStep
  // , toStep, toPrevStep
}) => {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      role="button"
      tabIndex={0}
      className={classNames('step_component')}
      onClick={() => toNextStep()}
      onKeyDown={() => toNextStep()}
    >
      {children}
    </motion.div>
  );
};

Step.propTypes = {
  children: PropTypes.children.isRequired,
  // toStep: PropTypes.func.isRequired,
  // toPrevStep: PropTypes.func.isRequired
  toNextStep: PropTypes.func.isRequired
};

export default Step;

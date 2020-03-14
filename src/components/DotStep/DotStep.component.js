import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import PropTypes from '../../utils/PropTypes';

import './DotStep.stylesheet.scss';

const DotComponent = ({ active, prevStep, toStep }) => {
  const variants = {
    hidden: prevStep ? { width: 20 } : {},
    visible: prevStep ? { width: 8 } : { width: active ? 20 : 8 }
  };

  return (
    <motion.button
      variants={variants}
      transition={{
        duration: prevStep ? 0.4 : 0.2
      }}
      type="button"
      className={classNames('dot_component', {
        'dot_component--active': active
      })}
      onClick={toStep}
    />
  );
};

DotComponent.propTypes = {
  active: PropTypes.bool,
  prevStep: PropTypes.bool,
  toStep: PropTypes.func.isRequired
};

DotComponent.defaultProps = {
  active: false,
  prevStep: false
};

const DotStepComponent = ({
  step,
  prevStep,
  dots,
  toStep
  // toNextStep,
  // toPrevStep
}) => {
  console.log('DotStepComponent', step, prevStep);

  return (
    <article className="dot_step_component">
      {Array.apply(0, new Array(dots)).map((x, index) => (
        <DotComponent
          prevStep={index === prevStep}
          active={index === step}
          toStep={() => toStep(index)}
        />
      ))}
    </article>
  );
};

DotStepComponent.propTypes = {
  step: PropTypes.number.isRequired,
  prevStep: PropTypes.number.isRequired,
  dots: PropTypes.number.isRequired,
  toStep: PropTypes.func.isRequired
  // toNextStep: PropTypes.func.isRequired,
  // toPrevStep: PropTypes.func.isRequired
};

export default DotStepComponent;

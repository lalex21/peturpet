import React from 'react';
import PropTypes from '../../utils/PropTypes';
import Step from '../Step/Step.component';

// eslint-disable-next-line no-unused-vars
const DotStepComponent = ({ step, dots, toStep, toNextStep, toPrevStep }) => {
  console.log('DotStepComponent', dots);

  return (
    <div>
      <Step toNextStep={toNextStep}>O</Step>
    </div>
  );
};

DotStepComponent.propTypes = {
  step: PropTypes.number.isRequired,
  toStep: PropTypes.func.isRequired,
  toNextStep: PropTypes.func.isRequired,
  toPrevStep: PropTypes.func.isRequired
};

export default DotStepComponent;

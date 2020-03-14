import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from '../../utils/PropTypes';

const StepToStep = ({ children }) => {
  const [step, setStep] = useState(0);

  const dots = children.length;
  const childrenArray = Array.isArray(children) ? children : [children];

  const toPrevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const toNextStep = () => {
    if (step < dots - 1) setStep(step + 1);
  };

  return (
    <div className={classNames('steptostep_component')}>
      {children &&
        React.cloneElement(childrenArray[step], {
          key: step,
          step,
          dots,
          toStep: setStep,
          toNextStep,
          toPrevStep
        })}
    </div>
  );
};

StepToStep.defaultProps = {
  children: undefined
};

StepToStep.propTypes = {
  children: PropTypes.children
};

export default StepToStep;

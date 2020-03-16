import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from '../../utils/PropTypes';

const StepToStep = ({ children, onChangeView }) => {
  const [step, setStep] = useState(0);
  const [prevStep, setPrevStep] = useState();

  const dots = children && children.length;
  const childrenArray = Array.isArray(children) ? children : [children];

  const toStep = stp => {
    if (stp !== step) {
      setPrevStep(step);
      setStep(stp);
    }
    if (typeof onChangeView === 'function') {
      onChangeView(stp, step);
    }
  };

  const toPrevStep = () => {
    if (step > 0) toStep(step - 1);
  };

  const toNextStep = () => {
    if (step < dots - 1) toStep(step + 1);
  };

  return (
    <div className={classNames('steptostep_component')}>
      {children &&
        React.cloneElement(childrenArray[step], {
          key: step,
          step,
          prevStep,
          dots,
          toStep,
          toNextStep,
          toPrevStep
        })}
    </div>
  );
};

StepToStep.defaultProps = {
  children: undefined,
  onChangeView: undefined
};

StepToStep.propTypes = {
  children: PropTypes.children,
  onChangeView: PropTypes.func
};

export default StepToStep;

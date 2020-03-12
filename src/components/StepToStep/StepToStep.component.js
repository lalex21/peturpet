import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const StepToStep = ({ children }) => {
  const [step, setStep] = useState(0);

  let childrenT;
  if (children) {
    if (!Array.isArray(children)) {
      childrenT = [children];
    } else {
      childrenT = children;
    }
  }

  return (
    <div className={classNames('steptostep_component')}>
      {childrenT
        ? React.cloneElement(childrenT[step], {
            toStep: setStep,
            toNextStep: () => setStep(step + 1),
            toPrevStep: () => setStep(step - 1)
          })
        : 'No children'}
    </div>
  );
};

StepToStep.defaultProps = {
  children: undefined
};

StepToStep.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default StepToStep;

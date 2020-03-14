import React from 'react';
import classNames from 'classnames';
import PropTypes from '../../utils/PropTypes';

const Step = ({
  children,
  toStep
  // , toStep, toPrevStep
}) => {
  return (
    <button
      tabIndex={0}
      type="button"
      className={classNames('step_component')}
      onClick={toStep}
    >
      {children}
    </button>
  );
};

Step.propTypes = {
  children: PropTypes.children.isRequired,
  // toStep: PropTypes.func.isRequired,
  // toPrevStep: PropTypes.func.isRequired
  toStep: PropTypes.func.isRequired
};

export default Step;

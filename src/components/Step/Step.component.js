import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Step = ({
  text,
  toNextStep
  // , toStep, toPrevStep
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={classNames('step_component')}
      onClick={() => toNextStep()}
      onKeyDown={() => toNextStep()}
    >
      {text}
    </div>
  );
};

Step.propTypes = {
  text: PropTypes.string.isRequired,
  // toStep: PropTypes.func.isRequired,
  // toPrevStep: PropTypes.func.isRequired
  toNextStep: PropTypes.func.isRequired
};

export default Step;

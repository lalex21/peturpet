import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ text, className, onClick }) => (
  <button
    className={classNames('button_component', className)}
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.defaultProps = {
  className: ''
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;

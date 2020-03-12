import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.stylesheet.scss';

const Button = ({ text, className, onClick, icon }) => (
  <button
    className={classNames('button_component', className)}
    type="button"
    onClick={onClick}
  >
    {text}
    {icon && <i className={icon} />}
  </button>
);

Button.defaultProps = {
  className: '',
  icon: ''
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string
};

export default Button;

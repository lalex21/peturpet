import React from 'react';
import classNames from 'classnames';

import './Button.stylesheet.scss';
import PropTypes from '../../utils/PropTypes';

const Button = ({ children, className, onClick, icon }) => (
  <button
    className={classNames('button_component', className)}
    type="button"
    onClick={onClick}
  >
    {children}
    {icon && <i className={icon} />}
  </button>
);

Button.defaultProps = {
  className: '',
  icon: ''
};

Button.propTypes = {
  children: PropTypes.children.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string
};

export default Button;

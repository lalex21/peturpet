/* eslint-disable react/button-has-type */
import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import PropTypes from '../../utils/PropTypes';

import ButtonAnimation from '../../animations/Button/Button.animation';

import './Button.stylesheet.scss';

const ButtonComponent = ({
  children,
  type,
  typeButton,
  onClick,
  disabled,
  size,
  icon,
  iconLeft,
  iconSize,
  className,
  empty,
  paw,
  id
}) => (
  <motion.button
    initial="hidden"
    animate={disabled ? 'showOnly' : 'visible'}
    id={id}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={classNames(
      'button_component',
      `button_component--${typeButton}`,
      `button_component--${size}`,
      {
        'button_component--paw': paw,
        'button_component--empty': empty,
        'button_component--no-children': !children
      },
      className
    )}
  >
    <div
      className={classNames({
        'button_component--btn': icon || iconLeft
      })}
    >
      {/* {icon && <Icon name={icon} size={iconSize} className="icon-right" />} */}
      {children}
      {/* {iconLeft && (
        <Icon name={iconLeft} size={iconSize} className="icon-left" />
      )} */}
      {paw && (
        <div className="button_component--paw-icon">
          <ButtonAnimation size={iconSize} />
        </div>
      )}
    </div>
  </motion.button>
);

ButtonComponent.defaultProps = {
  size: 'medium',
  iconSize: '16',
  icon: '',
  iconLeft: '',
  className: '',
  typeButton: 'primary',
  type: 'button',
  paw: false,
  disabled: false,
  empty: false,
  onClick: null,
  id: ''
};

ButtonComponent.propTypes = {
  iconSize: PropTypes.stringOrNumber,
  icon: PropTypes.string,
  iconLeft: PropTypes.string,
  className: PropTypes.string,
  empty: PropTypes.bool,
  paw: PropTypes.bool,
  type: PropTypes.string,
  typeButton: PropTypes.button,
  children: PropTypes.oneOfType([
    PropTypes.children.isRequired,
    PropTypes.stringOrNumber
  ]).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.buttonSizes,
  id: PropTypes.string
};

export default ButtonComponent;

import React from 'react';
import classNames from 'classnames';
import PropTypes from '../../utils/PropTypes';

import './RadioButton.stylesheet.scss';

const RadioButton = ({ name, options }) => {
  let optionsObject = options;

  if (Array.isArray(options)) {
    optionsObject = options.map(option => {
      return { label: option, value: option };
    });
  }

  return (
    <div className={classNames('radiobutton_component', name)}>
      {optionsObject.map(option => {
        return (
          <div
            key={option.label}
            className={classNames('radiobutton_component--option')}
          >
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
            />
            {/* eslint-disable jsx-a11y/label-has-associated-control */}
            <div>
              <label htmlFor={option.value} />
            </div>
            {/* eslint-enable jsx-a11y/label-has-associated-control */}
            {option.label}
          </div>
        );
      })}
    </div>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string.isRequired),
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ]).isRequired
};

export default RadioButton;

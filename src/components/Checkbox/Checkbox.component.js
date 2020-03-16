import React from 'react';
import PropTypes from '../../utils/PropTypes';

import './Checkbox.stylesheet.scss';

const Checkbox = ({ onChange, disabled, name, id, label, checked }) => (
  <div className="checkbox_component">
    <input
      type="checkbox"
      checked={checked}
      name={name}
      disabled={disabled}
      className="checkbox_component--input"
      id={`checkbox_component-${id}`}
      alt="checkbox"
      onChange={e => onChange(e)}
    />
    <label htmlFor={`checkbox_component-${id}`}>
      <p>{label}</p>
    </label>
  </div>
);

Checkbox.defaultProps = {
  id: '',
  name: '',
  label: '',
  onChange: () => {},
  checked: false,
  disabled: false
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Checkbox;

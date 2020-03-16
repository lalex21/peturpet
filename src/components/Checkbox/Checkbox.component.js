import React from 'react';
import PropTypes from '../../utils/PropTypes';

import './Checkbox.stylesheet.scss';

const Checkbox = ({ name }) => {
  return (
    <label htmlFor={name} className="checkbox_component">
      {name}
      <input
        id={name}
        className="checkbox_component--input"
        type="checkbox"
        value={name}
      />
      <span className="checkbox_component--checkmark" />
    </label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired
};

export default Checkbox;

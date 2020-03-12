import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.stylesheet.scss';

const Input = ({ placeholder, errorLabel }) => {
  // const [value, setValue] = useState(null);

  return (
    <>
      <input
        className={classNames('input_component', errorLabel ? 'error' : '')}
        placeholder={placeholder}
        // value={value}
        // onKeyPress={e => setValue(`${value}${e.key}`)}
      />
      {errorLabel && (
        <div className="input_component--error-label">{errorLabel}</div>
      )}
    </>
  );
};

Input.defaultProps = {
  placeholder: '',
  errorLabel: ''
};

Input.propTypes = {
  placeholder: PropTypes.string,
  errorLabel: PropTypes.string
};

export default Input;

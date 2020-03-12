import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from '../../utils/PropTypes';
import { formatUrl } from '../../utils/utils';

const LinkComponent = ({ children, to, ...props }) => {
  const re = new RegExp('^(http|https)://', 'i');
  const match = re.test(to);
  if (match) return <a href={to}>{children}</a>;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link to={formatUrl(to)} {...props}>
      {children}
    </Link>
  );
};

LinkComponent.defaultProps = {
  children: null
};

LinkComponent.propTypes = {
  children: PropTypes.children,
  to: PropTypes.string.isRequired
};

export default LinkComponent;

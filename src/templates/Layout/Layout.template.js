import React from 'react';
import classNames from 'classnames';
import PropTypes from '../../utils/PropTypes';
import { Container } from '../../components/Grid/Grid.component';

import './Layout.stylesheet.scss';

const LayoutTemplate = ({ children, className, style, center, full }) => {
  return (
    <article
      style={style}
      className={classNames(
        'layout_template',
        {
          'layout_template--full_screen': full,
          'layout_template--center': center
        },
        className
      )}
    >
      <Container>{children}</Container>
    </article>
  );
};

LayoutTemplate.propTypes = {
  children: PropTypes.children.isRequired,
  style: PropTypes.style,
  className: PropTypes.string,
  center: PropTypes.bool,
  full: PropTypes.bool
};

LayoutTemplate.defaultProps = {
  center: false,
  full: false,
  className: '',
  style: {}
};

export default LayoutTemplate;

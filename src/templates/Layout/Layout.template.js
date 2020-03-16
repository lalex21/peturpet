import React from 'react';
import classNames from 'classnames';
import PropTypes from '../../utils/PropTypes';
import { Container } from '../../components/Grid/Grid.component';

import './Layout.stylesheet.scss';

const LayoutTemplate = ({ children, className, style, center, full, paw }) => {
  return (
    <article
      style={style}
      className={classNames(
        'layout_template',
        {
          'layout_template--full_screen': full,
          'layout_template--center': center,
          'layout_template--paw': paw
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
  full: PropTypes.bool,
  paw: PropTypes.bool
};

LayoutTemplate.defaultProps = {
  center: false,
  full: false,
  paw: false,
  className: '',
  style: {}
};

export default LayoutTemplate;

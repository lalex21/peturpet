import React from 'react';
import PropTypes from '../../utils/PropTypes';
import Dots from '../../animations/frames/Dots/Dots.framer';

const GroupDotsComponent = ({ right, left, ...props }) => {
  const transition = {
    duration: 1.6,
    delay: 0.3
  };

  const variantsDotRight = {
    hidden: { y: right.init },
    visible: {
      y: right.to,
      transition
    }
  };

  const variantsDotLeft = {
    hidden: { y: left.init },
    visible: {
      y: left.to,
      transition
    }
  };

  console.log('routes_props', props);

  return (
    <>
      <div className="sign_in_container--dots sign_in_container--dots-left">
        <Dots animation={{ variants: variantsDotLeft }} />
      </div>
      <div className="sign_in_container--dots sign_in_container--dots-right">
        <Dots animation={{ variants: variantsDotRight }} />
      </div>
    </>
  );
};

GroupDotsComponent.propTypes = {
  right: PropTypes.shape({
    init: PropTypes.stringOrNumber,
    to: PropTypes.stringOrNumber
  }),
  left: PropTypes.shape({
    init: PropTypes.stringOrNumber,
    to: PropTypes.stringOrNumber
  })
};

GroupDotsComponent.defaultProps = {
  right: {
    init: -80,
    to: 80
  },
  left: {
    init: 5,
    to: -110
  }
};

export default GroupDotsComponent;

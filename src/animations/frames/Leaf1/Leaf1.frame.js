import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from '../../../utils/PropTypes';

const Leaf1 = ({
  color,
  x,
  y,
  width,
  height,
  animation: { initial, animate, transition }
}) => {
  return (
    <svg
      version="1.1"
      width={width}
      height={height}
      x={x}
      y={y}
      viewBox="0 0 172.7 170.6"
      xmlSpace="preserve"
    >
      <motion.g initial={initial} animate={animate} transition={transition}>
        <path
          fill={color}
          className="st0"
          d="M157.1,94.5c-0.2,2.1-1.7,3.5-3.3,4.8c-3.2,2.5-6.6,4.9-10.1,7.2c-10.5,6.8-21.8,12.3-33.2,17.5
    c3.7,0.1,7.4,0.4,11.1,0.9c3.9,0.5,7.7,1.5,11.5,2.8c3.3,1.2,8.6,3.2,7.5,7.7c-0.8,3.6-6,4.5-9,5.2c-3.7,0.9-7.4,1.6-11.2,2.1
    c-7.5,0.9-15.1,1-22.6,1.7c-7.5,0.6-14.9,2-22,4.3c-1.8,0.6-3.6,1.2-5.3,1.9c-0.6,0.3-1.3,0.5-1.9,0.6c-0.7,0.7-1.8,0.8-2.7,0.4
    c-9.6-5.5-19.2-11-28.8-16.5c-7.8-4.5-16.2-8.6-23.3-14.3c-3-2.4-7.2-5.7-7.4-10c-0.1-4,2.9-6.7,6.2-8.4c3.4-1.5,7.1-2.4,10.9-2.6
    c3.9-0.3,7.9-0.1,11.8,0.6c3.3,0.6,6.6,1.6,9.7,3c-2.9-4.8-5.6-9.7-8-14.8c-3.9-8.1-6.6-16.7-7.9-25.6c-0.5-3.4-1.7-9.4,2.4-11.2
    c2.2-1,4.3,0.4,5.8,1.8c1.5,1.4,2.9,2.9,4.2,4.4c8.3,9.6,13.5,21.2,19.7,32.1c-0.6-10.3-1-20.5-0.7-30.8c0.4-11.7,1.7-23.7,5.6-34.8
    c0.9-2.6,2-5.1,3.4-7.6c1.3-2.3,2.8-5.4,5.8-5.9c6.1-1,6.5,7.4,7,11.4c2.7,22.6,3.8,45.4,4.8,68.2c3.3-5.3,6.9-10.4,10.7-15.3
    c4.8-6.2,10.4-11.7,16.8-16.2c3-2.1,6.5-4.4,10-5.4c4-1.1,8.5,0.1,9.3,4.7c0.2,2.2-0.1,4.4-1,6.4c-0.7,1.9-1.6,3.8-2.6,5.6
    c-2.4,3.9-5.1,7.7-7.9,11.3c-3.7,5-7.5,9.9-11.3,14.8c5.9-2.4,12-4.3,18.2-5.9c7.9-2,16.3-3.4,24.2-0.7
    C155.7,90.6,157.3,92.3,157.1,94.5z"
        />
      </motion.g>
    </svg>
  );
};

Leaf1.propTypes = {
  color: PropTypes.string,
  width: PropTypes.stringOrNumber,
  height: PropTypes.stringOrNumber,
  y: PropTypes.stringOrNumber,
  x: PropTypes.stringOrNumber,
  animation: PropTypes.animation
};

Leaf1.defaultProps = {
  color: '#FD9697',
  width: 'auto',
  height: 'auto',
  x: 0,
  y: 0,
  animation: {
    initial: {},
    animate: {},
    transition: {}
  }
};

export default Leaf1;

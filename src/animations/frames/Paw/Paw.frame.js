/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from '../../../utils/PropTypes';

const PawFrame = ({
  color,
  x,
  y,
  width,
  height,
  animation: { initial, animate, transition, variants }
}) => {
  return (
    <motion.g
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <path
        id="paw"
        width={width}
        height={height}
        d="M282.077,361.674a2.919,2.919,0,1,1,3.182-2.081A2.7,2.7,0,0,1,282.077,361.674Zm7.789,1.478a2.506,2.506,0,1,1-.08-3.8A2.706,2.706,0,0,1,289.866,363.152Zm-2.148,5.986a2.92,2.92,0,1,1,3.8.146A2.706,2.706,0,0,1,287.718,369.138Zm-14.454-2.18a3.325,3.325,0,0,1,3.634-1.7,4.75,4.75,0,0,0,2.772-1.061,3.465,3.465,0,0,1,5.723,3.019,4.74,4.74,0,0,0,.691,2.887,3.328,3.328,0,0,1-3.855,5.35c-1.364-.72-2.764-2.618-3.307-2.9s-2.9-.369-4.264-1.089A3.335,3.335,0,0,1,273.264,366.958Zm3.919-9.35a2.92,2.92,0,1,1-2.674,2.7A2.707,2.707,0,0,1,277.183,357.608Z"
        transform="translate(-272.878 -356.046)"
        fill={color}
      />
    </motion.g>
  );
};

PawFrame.propTypes = {
  color: PropTypes.string,
  width: PropTypes.stringOrNumber,
  height: PropTypes.stringOrNumber,
  y: PropTypes.stringOrNumber,
  x: PropTypes.stringOrNumber,
  animation: PropTypes.animation
};

PawFrame.defaultProps = {
  color: '#FFF',
  width: '19.836',
  height: '19.798',
  x: 0,
  y: 0,
  animation: {
    initial: {},
    animate: {},
    variants: {},
    transition: {}
  }
};

export default PawFrame;

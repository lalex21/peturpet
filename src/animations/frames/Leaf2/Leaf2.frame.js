import React from 'react';
import PropTypes from '../../../utils/PropTypes';

const Leaf2 = ({ color }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 101.9 121.2"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        className="st0"
        d="M6.8,59.8c0.4-1.7,1.6-3,3.2-3.7c1.9-0.6,3.9-0.4,5.6,0.6c4.1,1.8,7.4,4.8,10.5,8c0.8,0.9,1.6,1.7,2.4,2.6
	c0.3,0.3,0.6,0.7,0.9,0.9c0.5,0.4,0.4,0.3,0.5-0.3c0.2-2-0.1-4.1-0.7-6c-1.3-4-3.7-7.6-5.9-11.1c-2.2-3.5-4.6-7.5-4.9-11.7
	c-0.2-2,0.6-4,2.2-5.3c1.4-0.9,3.1-1.3,4.7-1c4,0.5,7.6,3.3,10.5,6c0.9,0.8,1.7,1.7,2.5,2.6c0.4,0.4,0.7,0.7,1,1.2
	c0.1,0.1,0.1,0.1,0.2,0.2c0.1-0.1,0.1-0.3,0.1-0.4c0.5-1.9,0.6-3.9,0.4-5.8c-0.3-4-1.5-7.9-2.6-11.7c-1.1-3.7-2.5-7.8-2.2-11.8
	c0-1.9,0.8-3.7,2.1-5.1c1.3-1.2,3.1-1.6,4.8-1.3c3.9,0.7,6.3,4.3,7.8,7.6c0.9,2,1.5,4.1,2.3,6.1c0.2,0.6,0.4,1.2,0.6,1.8
	c0.1,0.2,0.2,0.3,0.3,0.5c0,0,0,0,0,0c0,0,0,0,0.1,0c0.4-0.3,0.7-0.7,1-1.1c0.3-0.3,0.5-0.7,0.7-1.1c2-3.2,2.9-7,4.6-10.4
	c1.6-3.3,4.1-6.1,7.7-7.2c3.7-1,7.6-0.5,10.8,1.5c3.5,2.1,5.7,5.7,5.2,9.8c-0.5,4.2-3.3,7.6-6.2,10.5c-1.6,1.6-3.2,3.1-4.6,4.8
	c-1.2,1.4-2.9,3.6-1.4,5.3c1.2,1.5,3.3,1.6,5,1.3c2.2-0.3,4.3-1,6.5-1.4c3.5-0.5,10-1.6,10.7,3.3c0.6,4-3.6,7.2-6.6,9.1
	c-6.2,3.9-13.8,4.8-20.1,8.6c-1.6,0.8-2.9,2-3.7,3.6c-0.9,1.9,0.6,2.9,2.3,3.3c4.1,1,8.5-0.1,12.6-0.6c3-0.4,8.9-0.9,9.6,3.3
	c0.7,4.1-5.1,6.4-8.1,7.5c-3.8,1.3-7.9,1.9-11.8,2.9c-1.9,0.5-3.9,0.9-5.4,2.2c-0.6,0.5-1.2,1.3-0.8,2.1c0.4,0.8,1.5,1.3,2.2,1.7
	c3.8,2,9,2,12,5.4c1.3,1.3,1.8,3.2,1.3,4.9c-0.7,1.9-2.7,2.8-4.5,3.5c-7.9,2.9-16.6,1.5-24.5,3.9c-3.9,1.2-7.6,3.2-10.8,5.8
	c-0.6,0.5-1.2,1-1.8,1.6c-2.3,3.6-3.4,8.4-5.1,11.9c-0.6,1.2-2.2,0.4-2.3-0.6c-0.3-4.5-1.2-9-2.6-13.3c-2.7-8-7.2-15.2-11.1-22.6
	c-2-3.6-3.7-7.4-5.2-11.3C7.2,67.5,5.7,63.4,6.8,59.8z"
      />
    </svg>
  );
};

Leaf2.propTypes = {
  color: PropTypes.string
};

Leaf2.defaultProps = {
  color: '#F5DAAD'
};

export default Leaf2;

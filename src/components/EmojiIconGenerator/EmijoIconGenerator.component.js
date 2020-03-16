import React from 'react';
import PropTypes from '../../utils/PropTypes';
import EmojiIcon from '../EmojiIcon/EmojiIcon.component';

import './EmojiIconGenerator.stylesheet.scss';

const EmojiIconGenerator = ({ n }) => {
  const number = Math.abs(n);

  return (
    <div className="emojiicongenerator_component">
      {number &&
        Array.apply(0, new Array(number)).map((_, index) => (
          <EmojiIcon pos={index} />
        ))}
    </div>
  );
};

EmojiIconGenerator.propTypes = {
  n: PropTypes.number.isRequired
};

export default EmojiIconGenerator;

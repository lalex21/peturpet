import React from 'react';
import { motion } from 'framer-motion';

import { emojis } from '../../constants/Emojis/Emojis';

import './EmojiIcon.stylesheet.scss';
import PropTypes from '../../utils/PropTypes';

const EmojiIcon = ({ pos }) => {
  return (
    <motion.div
      className="emojiicon_component"
      initial={{
        scale: 0
      }}
      animate={{
        scale: 1
      }}
      transition={{ delay: 0.1 * pos }}
    >
      <span aria-label="dog" role="img">
        {emojis[Math.floor(Math.random() * emojis.length)]}
      </span>
    </motion.div>
  );
};

EmojiIcon.defaultProps = {
  pos: 0
};

EmojiIcon.propTypes = {
  pos: PropTypes.number
};

export default EmojiIcon;

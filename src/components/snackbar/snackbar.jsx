import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import * as S from './snackbar.styles';

const Snackbar = ({ message }) => {
  const snackbar = {
    hide: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const msg = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <S.Snackbar
      variants={snackbar}
      initial="hide"
      animate="show"
      exit="hide"
      transformTemplate={(_, generated) => `translateX(-50%) ${generated}`}
    >
      <AnimatePresence mode="wait" initial="false">
        <motion.p
          variants={msg}
          initial="hide"
          animate="show"
          exit="hide"
          transition={{ duration: 0.1 }}
          key={message}
        >
          {message}
        </motion.p>
      </AnimatePresence>
    </S.Snackbar>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string,
};

export default Snackbar;

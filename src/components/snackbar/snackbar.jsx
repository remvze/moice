import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import {
  IoInformationCircleSharp,
  IoWarningSharp,
  IoCheckmarkCircleSharp,
} from 'react-icons/io5';

import * as S from './snackbar.styles';

const Snackbar = ({ message, type, onUndo }) => {
  const icons = {
    success: <IoCheckmarkCircleSharp />,
    info: <IoInformationCircleSharp />,
    critical: <IoWarningSharp />,
    warning: <IoWarningSharp />,
  };

  const colors = {
    critical: 'var(--color-critical-500)',
    success: 'var(--color-success-500)',
    warning: 'var(--color-warning-500)',
    info: 'var(--color-info-500)',
  };

  const snackbar = {
    hide: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const msg = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <S.Wrapper
      variants={snackbar}
      initial="hide"
      animate="show"
      exit="hide"
      transformTemplate={(_, generated) => `translateX(-50%) ${generated}`}
    >
      <S.Snackbar>
        <AnimatePresence mode="wait" initial="false">
          <S.SnackbarContent
            variants={msg}
            initial="hide"
            animate="show"
            exit="hide"
            transition={{ duration: 0.1 }}
            key={message}
          >
            {type && (
              <S.Icon $color={colors[type] || null}>{icons[type] || ''}</S.Icon>
            )}
            <S.Text $withButton={typeof onUndo === 'function'}>
              {message}
            </S.Text>
            {typeof onUndo === 'function' && (
              <S.Button onClick={onUndo}>Undo</S.Button>
            )}
          </S.SnackbarContent>
        </AnimatePresence>
      </S.Snackbar>
    </S.Wrapper>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'info', 'critical', 'warning']),
  onUndo: PropTypes.func,
};

export default Snackbar;

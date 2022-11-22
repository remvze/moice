import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import Snackbar from '@/components/snackbar';

export const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState(null);
  const [onUndo, setOnUndo] = useState(null);
  const [visible, setVisible] = useState(false);
  const timeout = useRef();

  const duration = 5000;

  const setTimer = useCallback(func => {
    if (timeout.current) clearTimeout(timeout.current);

    timeout.current = setTimeout(func, duration);
  }, []);

  const show = useCallback(
    ({ message = '', type = null, onUndo = null }) => {
      setMessage(message);
      setType(type);
      setOnUndo(() => onUndo);
      setVisible(true);

      setTimer(() => {
        setMessage('');
        setType(null);
        setOnUndo(null);
        setVisible(false);
      });
    },
    [setTimer]
  );

  return (
    <SnackbarContext.Provider value={show}>
      {children}

      <AnimatePresence>
        {visible && <Snackbar message={message} type={type} onUndo={onUndo} />}
      </AnimatePresence>
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.any,
};

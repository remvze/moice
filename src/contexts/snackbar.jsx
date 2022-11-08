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
  const [visible, setVisible] = useState(false);
  const timeout = useRef();

  const duration = 5000;

  const setTimer = useCallback(func => {
    if (timeout.current) clearTimeout(timeout.current);

    timeout.current = setTimeout(func, duration);
  }, []);

  const show = useCallback(
    (msg = '') => {
      setMessage(msg);
      setVisible(true);

      setTimer(() => {
        setMessage('');
        setVisible(false);
      });
    },
    [setTimer]
  );

  return (
    <SnackbarContext.Provider value={show}>
      {children}

      <AnimatePresence>
        {visible && <Snackbar message={message} />}
      </AnimatePresence>
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.any,
};

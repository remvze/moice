import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';

export const PWAContext = createContext();

export const usePWA = () => useContext(PWAContext);

export const PWAProvider = ({ children }) => {
  const deferredPrompt = useRef(null);

  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = e => {
      e.preventDefault();

      deferredPrompt.current = e;

      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () =>
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
  }, []);

  const install = useCallback(async () => {
    if (deferredPrompt.current !== null) {
      deferredPrompt.current.prompt();

      const { outcome } = await deferredPrompt.current.userChoice;

      if (outcome === 'accepted') {
        deferredPrompt.current = null;
        setIsInstallable(false);
      }
    }
  }, []);

  const value = useMemo(
    () => ({
      isInstallable,
      install,
    }),
    [isInstallable, install]
  );

  return <PWAContext.Provider value={value}>{children}</PWAContext.Provider>;
};

PWAProvider.propTypes = {
  children: PropTypes.any,
};

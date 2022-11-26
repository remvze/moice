import { useCallback } from 'react';

const useBadge = () => {
  const setBadge = useCallback(count => {
    if (navigator.setAppBadge) navigator.setAppBadge(count);
    else if (navigator.setClientBadge) navigator.setClientBadge(count);
  }, []);

  const clearBadge = useCallback(() => {
    if (navigator.clearAppBadge) navigator.clearAppBadge();
    else if (navigator.clearClientBadge) navigator.clearClientBadge();
  }, []);

  return { setBadge, clearBadge };
};

export default useBadge;

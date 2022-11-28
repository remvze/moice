import { useCallback } from 'react';

const useBadge = () => {
  const setBadge = useCallback(count => {
    if (!('setAppBadge' in navigator)) return;

    return navigator.setAppBadge(count);
  }, []);

  const clearBadge = useCallback(() => {
    if (!('clearAppBadge' in navigator)) return;

    return navigator.clearAppBadge();
  }, []);

  return { setBadge, clearBadge };
};

export default useBadge;

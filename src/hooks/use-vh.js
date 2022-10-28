import { useEffect } from 'react';

const useVH = () => {
  useEffect(() => {
    const calc = () => {
      const vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    calc();

    window.addEventListener('resize', calc);

    return () => window.removeEventListener('resize', calc);
  }, []);
};

export default useVH;

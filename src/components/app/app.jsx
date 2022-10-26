import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Router from '@/components/router';
import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

import '@/styles/imports.css';

const App = () => {
  useEffect(() => {
    const calc = () => {
      const vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    calc();

    window.addEventListener('resize', calc);

    return () => window.removeEventListener('resize', calc);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

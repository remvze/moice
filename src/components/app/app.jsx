import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Router from '@/components/router';
import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

import '@/styles/imports.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <AnimatePresence>
          <Router />
        </AnimatePresence>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

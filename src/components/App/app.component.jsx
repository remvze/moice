import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Router from '@/components/router';
import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

import '@/styles/imports.css';

const App = () => {
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

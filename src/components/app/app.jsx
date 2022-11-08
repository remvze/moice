import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Router from '@/components/router';
import GlobalStyles from '@/styles/global';
import { SnackbarProvider } from '@/contexts/snackbar';
import theme from '@/styles/theme';
import useVH from '@/hooks/use-vh';

import '@/styles/imports.css';

const App = () => {
  useVH();

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Router />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;

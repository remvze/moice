import { useMemo, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import Router from '@/components/router';
import GlobalStyles from '@/styles/global';
import { SnackbarProvider } from '@/contexts/snackbar';
import theme from '@/styles/theme';
import useVH from '@/hooks/use-vh';
import useBadge from '@/hooks/use-badge';
import { useTasks } from '@/store';

const App = () => {
  useVH();

  const tasks = useTasks(state => state.tasks);

  const activeTasks = useMemo(
    () => tasks.filter(task => !!task.text.length && !task.done).length,
    [tasks]
  );

  const { setBadge, clearBadge } = useBadge();

  useEffect(() => {
    if (activeTasks === 0) clearBadge();
    else setBadge(activeTasks);
  }, [activeTasks, setBadge, clearBadge]);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <BrowserRouter>
            <GlobalStyles />
            <Router />
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;

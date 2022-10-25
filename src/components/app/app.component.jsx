import { BrowserRouter } from 'react-router-dom';

import Router from '@/components/router';
import GlobalStyles from '@/styles/global';

import '@/styles/imports.css';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/components/app';
import { PWAProvider } from '@/contexts/pwa';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <PWAProvider>
      <App />
    </PWAProvider>
  </React.StrictMode>
);

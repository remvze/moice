import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/home';
import NotFound from '@/pages/not-found';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/opacity" element={<Home animation="opacity" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;

import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/home';
import About from '@/pages/about';
import NotFound from '@/pages/not-found';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;

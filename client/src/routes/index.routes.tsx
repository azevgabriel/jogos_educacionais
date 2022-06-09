import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES
import { Game } from '../pages/Games';
import { Menu } from '../pages/Menu';
import { NotFound } from '../pages/404';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/jogos/:nome" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

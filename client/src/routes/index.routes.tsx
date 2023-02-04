import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Game } from '../pages/Games';
import { Menu } from '../pages/Menu';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jogos" element={<Menu />} />
        <Route path="/jogos/:nome" element={<Game />} />
        <Route path="*" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { SharedLayout } from './components/SharedLayout/SharedLayout.js';
import { My } from './components/My/My';
import { Kontakt } from './components/Kontakt/Konttakt';
import { Repertuar } from './components/Repertuar/Repertuar';

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/o-nas" element={<My />} />
          <Route path="/repertuar" element={<Repertuar />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="*" element={<Navigate to="./" />} />
        </Route>
      </Routes>
   
  );
};

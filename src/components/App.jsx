import { Routes, Route } from 'react-router-dom';
// import { Home } from './pages/Home';
import { Home } from './pages/Home';
import { Layout } from './Layout/Layout';
import { FilmsSubPage } from './pages/FilmsSubPage';
// import { FilmsPage } from './pages/EventsPage';
// import { FilmsSubPage } from './pages/FilmsSubPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/TrainMovie" element={<Layout />}>
        <Route path="/TrainMovie" element={<Home />}>
          <Route path="TrainMovieId" element={<FilmsSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { Home } from './pages/Home/Home';
// import { FilmsSubPage } from './pages/FilmsSubPage';
// import { SearchMovie } from './pages/SearchMovie';
// import { ActorWarehouse } from './pages/ActorWarehouse';
import { lazy } from 'react';
// import { lazy } from 'react';
// import { Reviews } from './pages/Reviews';
// const Reviews = lazy(() => import('./pages/Reviews'));
// import { FilmsPage } from './pages/EventsPage';
// import { FilmsSubPage } from './pages/FilmsSubPage';

const Home = lazy(() => import('./pages/Home/Home'));
const FilmsSubPage = lazy(() => import('./pages/FilmsSubPage'));
const SearchMovie = lazy(() => import('./pages/SearchMovie'));
const ActorWarehouse = lazy(() => import('./pages/ActorWarehouse'));
const Reviews = lazy(() => import('./pages/Reviews'));
// const Home = lazy(() => import('pages/Home'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovie />} />
        <Route path="movies/:id" element={<FilmsSubPage />}>
          <Route path=":cast" element={<ActorWarehouse />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      {/* /products/:id */}
    </Routes>
  );
};
//  <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetails />} />

//  <Routes>
//    <Route path="/TrainMovie" element={<Layout />}>
//      <Route path="/TrainMovie" element={<Home />}>
//        <Route path=":TrainMovieId" element={<FilmsSubPage />} />
//      </Route>
//    </Route>
//  </Routes>;

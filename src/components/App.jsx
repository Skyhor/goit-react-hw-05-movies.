import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './Layout/Layout';
import { FilmsSubPage } from './pages/FilmsSubPage';
import { SearchMovie } from './pages/SearchMovie';
// import { FilmsPage } from './pages/EventsPage';
// import { FilmsSubPage } from './pages/FilmsSubPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<SearchMovie />} />
        <Route path=":id" element={<FilmsSubPage />} />
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

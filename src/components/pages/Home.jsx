import { FilmsApi } from 'services/FilmsApi';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    FilmsApi()
      .then(setMovies)
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    !isLoading &&
    movies.length && (
      <>
        <ul>
          {movies.map(({ id, title, name, poster_path, vote_average }) => {
            return (
              <li key={id}>
                <Link to={id.toString()}>{name ?? title}</Link>
                <p>{vote_average}</p>
                <img src={poster_path} alt="" width="400" />
              </li>
            );
          })}
        </ul>
        <Outlet />
      </>
    )
  );
};

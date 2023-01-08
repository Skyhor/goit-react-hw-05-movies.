import { useEffect } from 'react';
import { useState } from 'react';
import { fetchEventById } from 'services/FilmsApi';
export const FilmsSubPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchEventById()
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
      <ul>
        {/* {movies.map(({ id, title, name, poster_path, vote_average }) => {
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""
              width="300"
            />
            <p>{name ?? title}</p>
            <p>{vote_average}</p>
          </li>;
        })} */}
      </ul>
    )
  );
};

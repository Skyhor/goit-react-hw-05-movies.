import { fetchEventById } from 'services/FilmsApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const FilmsPage = () => {
  const [films, setFilms] = useState(null);
  const { homeId } = useParams;
  useEffect(() => {
    fetchEventById(homeId).then(setFilms);
  }, [homeId]);
  return films;
};

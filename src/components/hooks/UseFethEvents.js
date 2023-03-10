import { fetchEventById } from 'services/FilmsApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const UseFetchEvents = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);
  return event;
};

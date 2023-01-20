import { ActorWarehouseApp } from 'services/FilmsApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Ul, Li } from './Actor.stuled';
import plug from '../../images/plugactor.png';
export const ActorWarehouse = () => {
  const [name, setName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function ApiActors() {
      setIsLoading(true);
      await ActorWarehouseApp(id)
        .then(setName)
        .catch(error => {
          console.log(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    ApiActors();
  }, [id]);

  return (
    !isLoading &&
    name && (
      <Ul>
        {name.map(({ name, id, profile_path }) => (
          <Li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt="Actors"
                width="150"
                height="250"
              />
            ) : (
              <img src={plug} alt="Actors" width="150" height="250" />
            )}
            <p>{name}</p>
          </Li>
        ))}
      </Ul>
    )
  );
};

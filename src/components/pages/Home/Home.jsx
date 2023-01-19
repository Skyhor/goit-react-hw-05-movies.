import { FilmsApi } from 'services/FilmsApi';
import { useEffect, useState } from 'react';
import { List } from '../SearchMovie.styled';
import { Card } from './Home.styled';
import { Linkk } from './Home.styled';
import { Grade } from './Home.styled';
import { InfoBlock } from './Home.styled';
import { NameDiv } from './Home.styled';
import { Description } from './Home.styled';
import { Title } from './Home.styled';
import { Overview } from './Home.styled';
const Home = () => {
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
      <List>
        {movies.map(
          ({ id, title, name, poster_path, vote_average, page, overview }) => {
            return (
              <Card key={id}>
                <Linkk to={`movies/${id.toString()}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt=""
                    width="300"
                    height="420"
                  />
                  <InfoBlock>
                    <Grade>
                      <Description>
                        {Math.round(vote_average * 10) / 10} ⭐
                      </Description>
                      <Overview>{overview}</Overview>
                    </Grade>
                  </InfoBlock>
                  <NameDiv>
                    <Title>{name ?? title}</Title>
                  </NameDiv>
                </Linkk>
              </Card>
            );
          }
        )}
      </List>
    )
  );
};
export default Home;

import { Form } from './SearchMovie.styled';
import { SearchFilms } from 'services/FilmsApi';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import s from './test.module.css';
import { List } from './SearchMovie.styled';
import { Card } from './SearchMovie.styled';
import { Linkk } from './SearchMovie.styled';
import plug from '../../images/plug.webp';
import { Img } from './SearchMovie.styled';
import { CardBor, ContBtn, BtnPage, AktPage } from './SearchMovie.styled';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import {
  InfoBlock,
  Grade,
  NameDiv,
  Title,
  Description,
  Overview,
} from './SearchMovie.styled';

export const SearchMovie = () => {
  const [events, setEvents] = useState('');
  const [movie, setMovie] = useState('');
  const [totalPages, setTotalPages] = useState('');
  const [pages, setPages] = useState(1);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null || query === '') {
      return;
    }
    SearchFilms(query, pages).then(({ results, total_pages }) => {
      setEvents(results);
      setTotalPages(total_pages);
    });
  }, [query, pages]);

  const nextPage = () => {
    setPages(prevPage => prevPage + 1);
    scroll.scrollToTop();
  };
  const prevPage = () => {
    if (pages === 1) {
      return;
    }
    setPages(prevPage => prevPage - 1);
    scroll.scrollToTop();
  };
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target[0].value;
    setSearchParams({ query: form });
    setPages(1);
    setMovie('');
  };

  const handleChange = e => {
    if (movie.length === '') {
      return;
    }
    setMovie(e.currentTarget.value.toLowerCase());
  };
  return (
    <>
      <Form onSubmit={handleSubmit} id="create-course-form">
        <input
          type="text"
          name="movie"
          className={movie.length ? s.active : s.nAc}
          placeholder="Search..."
          value={movie}
          onChange={handleChange}
        />
        <button type="submit">Sub</button>
      </Form>
      {events && (
        <List>
          {events.map(
            ({ id, title, name, poster_path, vote_average, overview }) => (
              <Card key={id}>
                <Linkk to={`${id.toString()}`} state={{ location }}>
                  <CardBor>
                    {poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt=""
                        width="300"
                        height="420"
                      />
                    ) : (
                      <Img src={plug} alt="" width="300" height="420" />
                    )}

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
                    {/* <p>{vote_average}</p> */}
                  </CardBor>
                </Linkk>
              </Card>
            )
          )}
        </List>
      )}
      {events.length > 0 && pages < totalPages && (
        <ContBtn>
          <BtnPage onClick={prevPage}> Prev</BtnPage>
          <AktPage>{pages}</AktPage>
          <BtnPage onClick={nextPage}> Next</BtnPage>
        </ContBtn>
      )}
    </>
  );
};

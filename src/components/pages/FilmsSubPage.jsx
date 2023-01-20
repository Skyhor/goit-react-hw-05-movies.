import { UseFetchEvents } from 'components/hooks/UseFethEvents';
import s from './FilmsSubPage.module.css';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { ContLinkList, Div, TextContKink } from './FilmsSubPage.styled';
import { DivInfo } from './FilmsSubPage.styled';
import { BtnBack } from './FilmsSubPage.styled';
import { ContLink } from './FilmsSubPage.styled';
import plug from '../../images/plug.webp';

export default function FilmsSubPage() {
  const result = UseFetchEvents();
  const location = useLocation();
  const refLocation = useRef(location.state?.location);
  const from = location.state?.from ?? '/';
  // console.log(location);
  return (
    result && (
      <>
        <BtnBack to={refLocation.current ?? '/'}>Go back</BtnBack>
        {/* <button to={refLocation.current ?? '/'}>Go back</button> */}
        <Div>
          {result.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
              alt=""
              width="300"
            />
          ) : (
            <img src={plug} alt="" width="300" height="420" />
          )}
          <DivInfo>
            <h1>{result.title}</h1>
            <p className={result.vote_average > 6 ? s.goodVote : s.badVote}>
              Rating:{result.vote_average}
            </p>
            <p>Languege:{result.original_language}</p>
            <p>Date:{result.release_date}</p>
          </DivInfo>
        </Div>
        <ContLink>
          <ContLinkList>
            <TextContKink to={`cast`} state={{ from: from }}>
              Cast
            </TextContKink>
          </ContLinkList>
          <ContLinkList>
            <TextContKink to={'reviews'} state={{ from: from }}>
              Reviews
            </TextContKink>
          </ContLinkList>
        </ContLink>

        <Outlet />
      </>
    )
  );
}

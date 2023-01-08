import { FilmsApi } from 'services/FilmsApi';
import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { List } from './Home.styled';
import { Card } from './Home.styled';
import { Linkk } from './Home.styled';
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
      <List>
        {movies.map(({ id, title, name, poster_path, vote_average }) => {
          return (
            <Card key={id}>
              <Linkk to={id.toString()}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt=""
                  width="300"
                />
                <p>{name ?? title}</p>
                <p>{vote_average}</p>
              </Linkk>
            </Card>
          );
        })}
      </List>
    )
  );
};
// import { Link } from 'react-router-dom';
// import { Container, CardWrapper, ProductName } from './ProductList.styled';

// export const ProductList = ({ products }) => {
//   return (
//     <Container>
//       {products.map(product => (
//         <CardWrapper key={product.id}>
//           <Link to={`${product.id}`}>
//             <img src="https://via.placeholder.com/200x100" alt="" />
//             <ProductName>{product.name}</ProductName>
//           </Link>
//         </CardWrapper>
//       ))}
//     </Container>
//   );
// };

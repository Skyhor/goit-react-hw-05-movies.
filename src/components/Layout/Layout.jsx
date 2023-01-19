import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </>
  );
};

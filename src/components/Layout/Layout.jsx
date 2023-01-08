// import { Navigation } from 'components/Navigation/Navigation';
// import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};
// export const Layuot = () => {
//   return (
//     <>
//       <header>
//         <Navigation />
//       </header>
//       <main></main>
//       <footer>Footer</footer>
//     </>
//   );
// };

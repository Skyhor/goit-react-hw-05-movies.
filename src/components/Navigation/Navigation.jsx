import { NavHead } from './Navigation.styled';
import { Ul } from './Navigation.styled';
import { List } from './Navigation.styled';
import { Nav } from './Navigation.styled';
import train from '../../images/train.png';
export const Navigation = () => {
  return (
    <NavHead>
      <Ul>
        <div>
          <img src={train} width="80" height="70" alt="icon" />
          {/* <svg xmlns={train} /> */}
        </div>
        <List>
          <Nav to={'/'} end>
            Home
          </Nav>
        </List>
        <List>
          <Nav to={'/movies'}>Search</Nav>
        </List>
      </Ul>
    </NavHead>
  );
};

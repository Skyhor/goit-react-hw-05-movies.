import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: gray;
  display: flex;
  font-family: Chalkduster, fantasy;
  padding: 5px;
  &:hover,
  &:focus {
    text-decoration: underline;
    font-weight: 800;
  }
  &.active {
    color: black;
    text-decoration: underline;
  }
`;
export const List = styled.li`
  text-decoration: none;
  list-style: none;
  displat: flex;
  margin-right: 10px;
  margin-top: 22px;
`;
export const Ul = styled.ul`
  display: flex;
  margin: 0;
`;
export const NavHead = styled.nav`
  background-color: yellow;
  height: 70px;
`;
export const Image = styled.img`
width= 40px;
heigtht= 40px;`;

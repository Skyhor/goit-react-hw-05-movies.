import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.li`
  text-decoration: none;
  list-style: none;
`;
export const Linkk = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

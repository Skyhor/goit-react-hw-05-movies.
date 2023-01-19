import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.li`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  list-style: none;
`;
export const Linkk = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
export const Grade = styled.div`
  width: 300px;
  height: 420px;
  bottom: 80px;

  &:hover,
  &:focus {
    background-image: linear-gradient(
      rgba(47, 48, 58, 0.8),
      rgba(47, 48, 58, 0.8)
    );
  }
`;
export const InfoBlock = styled.div`
  position: absolute;
  opacity: 0;
  width: 300;
  height: 500;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
export const NameDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80px;
  width: 30px
  align-items: center;
  
  // background: black;
   
`;

export const Description = styled.p`
  color: yellow;
  position: absolute;
      top: 0px;
    right: 15px;
}
`;
export const Overview = styled.p`
  color: white;
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-weight: 400;
`;
export const Title = styled.h4`
  color: black;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Form = styled.form`
  margin-left: 50%;
  top: 15%;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.li`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  list-style: none;
  margin-bottom: 25px;
  margin-left: 30px;
`;
export const Linkk = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
`;

export const Img = styled.img`
  margin: 0;
`;
export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80px;
  align-items: center;
  //   &:hover {
  //     border-top: 3px solid violet;
  //   }
`;
export const NameTitle = styled.p`
  width: 285px;
  margin-left: 12px;
`;
export const CardBor = styled.div``;
export const ContBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const BtnPage = styled.button`
  cursor: pointer;
`;
export const AktPage = styled.p`
  margin: 10px;
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
  width: 300px;
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
export const Grade = styled.div`
  width: 300px;
  height: 420px;
  position: absolute;
  bottom: 3px;

  &:hover,
  &:focus {
    background-image: linear-gradient(
      rgba(47, 48, 58, 0.8),
      rgba(47, 48, 58, 0.8)
    );
  }
`;

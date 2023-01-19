import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Div = styled.div`
  display: flex;
  margin-top: 40px;
`;
export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
export const BtnBack = styled(Link)`
  position: absolute;
  top: 80px;
  left: 20px;
`;
export const ContLink = styled.ul`
  display: flex;
`;
export const ContLinkList = styled.li`
  margin-left: 20px;
`;
export const TextContKink = styled(Link)`
  color: gray;
  }
`;

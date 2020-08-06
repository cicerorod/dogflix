import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperImage = styled(Link)`
  text-decoration: none;
`;

export const Image = styled.img`
  max-width: 168px;
  margin-top: 10px;
  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

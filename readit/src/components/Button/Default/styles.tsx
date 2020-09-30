import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DefaultContainer = styled(Link)`
  padding: 12px 24px;
  font: 600 20px Poppins;
  text-align: center;
  text-decoration: none;
  border: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};

  @media (min-width: 720px) {
    width: initial;
  }
`;

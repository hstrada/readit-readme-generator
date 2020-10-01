import styled from 'styled-components';

import { DefaultContainer } from '../Default/styles';

export const Container = styled(DefaultContainer)`
  background-color: ${({ theme }) => theme.colors.transparent};
  border: 2px solid #202020;
  color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background-color: #f6f6f6;
  }
`;

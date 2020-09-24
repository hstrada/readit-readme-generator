import styled from 'styled-components';

import { DefaultContainer } from '../Default/styles';

export const Container = styled(DefaultContainer)`
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  &:hover {
    background-color: red;
  }
`;

import styled from 'styled-components';

import { DefaultContainer } from '../Default/styles';

export const Container = styled(DefaultContainer)`
  background-color: ${({ theme }) => theme.colors.button.outline.background};
  border: 2px solid ${({ theme }) => theme.colors.button.outline.border};
  color: ${({ theme }) => theme.colors.button.outline.font};
  &:hover {
    background-color: #f6f6f6;
  }
`;

import styled from 'styled-components';

import { DefaultContainer } from '../Default/styles';

import { StyledProps } from './interface';

export const Container = styled(DefaultContainer)<StyledProps>`
  
  &:hover {
    background-color: #085ddd;
  }

  ${({ small }) => small && { 'font-size': '14px', padding: '8px 12px' }}
`;

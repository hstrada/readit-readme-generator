import styled from 'styled-components';

import { DefaultContainer } from '../Default/styles';

import { StyledProps } from './interface';

export const Container = styled(DefaultContainer)<StyledProps>`
  &:hover {
    background-color: #085ddd;
  }

  &:focus {
    box-shadow: 0px 0px 0px 4px #6AA6FF;
  }

  ${({ small }) => small && { 'font-size': '14px', padding: '8px 12px' }}
`;

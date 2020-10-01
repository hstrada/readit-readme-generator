import styled from 'styled-components';

import { StyledProps } from './interface';

export const Container = styled.div<StyledProps>`
  ${({ isCompleted }) => isCompleted && 'text-decoration: line-through'};
  display: flex;
  align-content: center;
  /* color: ${({ theme }) => theme.colors.primary}; */
`;

export const ButtonAdd = styled.button`
  border: 0;
  background: transparent;
  margin-left: 12px;
  margin-right: 12px;
`;

export const ButtonDelete = styled.button`
  border: 0;
  background: transparent;
`;

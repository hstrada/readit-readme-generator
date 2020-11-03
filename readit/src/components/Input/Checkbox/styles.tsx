import { FiCheck, FiTrash2 } from 'react-icons/fi';
import styled, { css } from 'styled-components';

import { StyledProps } from './interface';

export const Container = styled.div`
  width: 100%;
  height: 54px;
  background-color: ${({ theme }) => theme.colors.checkbox.background};
  color: ${({ theme }) => theme.colors.checkbox.color};
  border-color: ${({ theme }) => theme.colors.checkbox.border};
  border-width: 2px;
  border-style: solid;
  display: flex;
  flex: 1;
  padding: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const ContainerCheck = styled.div<StyledProps>`
  height: 20px;
  width: 20px;
  padding: 2px;
  display: flex;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.checkbox.border};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  ${({ isCompleted, theme }) =>
    isCompleted && `background-color: ${theme.colors.checkbox.placeholder};`};
  &:hover {
    border-color: #ccc;
    color: #ccc;
  }
`;

export const Check = styled(FiCheck)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.checkbox.border};
  &:hover {
    color: #ccc;
  }
`;

export const Label = styled.input`
  width: 100%;
  margin-left: 16px;
  margin-right: 16px;
  border: none;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.secondary};

  &:focus {
    border-bottom-color: rgba(23, 113, 247, 0.7);
    border-bottom-width: 2px;
    border-bottom-style: solid;
    font-size: 12px;
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.checkbox.border};
  &:hover {
    color: red;
  }
`;

export const Icon = styled(FiTrash2)`
  ${iconCSS}
`;
